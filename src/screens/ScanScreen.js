import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text, Button, Paragraph, Menu, Divider, Provider, useTheme } from 'react-native-paper';
import { BarCodeScanner } from 'expo-barcode-scanner';


import HeaderComponent from '../components/Header/HeaderComponent';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});



const ScannerScreen = ({ navigation }) => {

    const { colors } = useTheme();
    const [hasPermission, setHasPermission] = React.useState(null);
    const [scanned, setScanned] = React.useState(false);

    const [open, setOpen] = React.useState(false);


    React.useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setOpen(false);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        console.log(data);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={{ ...styles.container, backgroundColor: colors.surface }}>
            <HeaderComponent title="Scanner QR" goBack={() => navigation.goBack()} menu={false} />

            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && <Button mode="contained" onPress={() => setScanned(false)}> Scanner </Button>}
            </View>
        </View>
    );
}


export default ScannerScreen;