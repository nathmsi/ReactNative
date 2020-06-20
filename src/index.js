import 'react-native-gesture-handler';
import React from 'react';


import { Provider as PaperProvider, Button, Paragraph, Dialog, Portal } from 'react-native-paper';

import { Context as ThemeContext } from './contexts/ThemeColorContext';

import Navigation from './navigation/mainNavigation';

import NetInfo from "@react-native-community/netinfo";

import { Updates } from 'expo';


export default function App() {
    const [visible, setVisible] = React.useState(true);
    const theme = React.useContext(ThemeContext);

    React.useEffect(() => {
        theme.setLocalStorage();
        const unsubscribe = NetInfo.addEventListener(state => {
            console.log("Is connected?", state.isConnected);
            if (state.isConnected) {
                setVisible(false);
            } else {
                setVisible(true);
            }
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const handleReloadApp = () => {
        Updates.reload();
    }

    return (
        <PaperProvider theme={theme.state.theme}>
            <Navigation />
            <Overlay visible={visible}  handleReloadApp={handleReloadApp} />
        </PaperProvider>
    );
}


const Overlay = ({  visible , handleReloadApp}) => (
    <Portal>
        <Dialog
            visible={visible}
            >
            <Dialog.Title>Network Failed</Dialog.Title>
            <Dialog.Actions>
                <Button onPress={() => handleReloadApp()} style={{ backgroundColor: 'red'  }}> Restart App </Button>
            </Dialog.Actions>
        </Dialog>
    </Portal >
)