import * as React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { navigationRef  } from './navigationRef';
import DrawerContent from './drawer';


import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ScanScreen from '../screens/ScanScreen';
import ListCards from '../screens/ListCards';

const Stack = createStackNavigator();
const NavigationStck = () => (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName="Home"
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Scanner" component={ScanScreen} />
            <Stack.Screen name="ListCards" component={ListCards} />
        </Stack.Navigator>
);




const Drawer = createDrawerNavigator();
const DrawerNavigator = () => (
     <NavigationContainer  ref={navigationRef} >
        <Drawer.Navigator drawerContent={(props) => <DrawerContent  {...props} />}  >
            <Drawer.Screen name="Home" component={NavigationStck} />
        </Drawer.Navigator>
    </NavigationContainer>
)



export default DrawerNavigator;