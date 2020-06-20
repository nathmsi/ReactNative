import React, { useEffect, useState } from 'react';
import { View } from 'react-native'
import Navigation from './navigation';

import NetInfo from "@react-native-community/netinfo";
import { Overlay, Text } from 'react-native-elements';
import { Button } from 'react-native-paper';


import { Updates } from 'expo';


export default () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
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
        <>
            <Navigation />
            <Overlay isVisible={visible}  >
                <View>
                    <Text>Please connect to internet connexion</Text>
                    <Button   onPress={() => handleReloadApp()} style={{ color : 'black'}}> Restart App </Button>
                </View>
            </Overlay>
        </>
    )
}