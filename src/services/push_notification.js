import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

import Constants from 'expo-constants';


export default async () => {


    let token = ''

    if (Constants.isDevice) {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return token;
        }
        token = await Notifications.getExpoPushTokenAsync();
    } else {
        //alert('Must use physical device for Push Notifications');
        return token;
    }
    if (Platform.OS === 'android') {
        Notifications.createChannelAndroidAsync('default', {
            name: 'default',
            sound: true,
            priority: 'max',
            vibrate: [0, 250, 250, 250],
        });
    }

    //console.log(token);
    return token;

};