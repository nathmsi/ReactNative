import React, { useContext } from 'react';
import { Button, View, Text } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { NavigationContainer, BaseRouter } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef , setDrawer } from './navigationRef';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './drawer';

import ProductViewScreen from '../screens/ProductViewScreen'
import SearchScreen from '../screens/SearchScreen'

import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import AccountScreen from '../screens/AccountScreen'
import SplashScreen from '../screens/SplashScreen'
import ContactScreen from '../screens/ContactScreen'
import OrderScreen from '../screens/OrderScreen'
import ProductByCategorieScreen from '../screens/ProductByCategorieScreen'
import FindeMeScreen from '../screens/FindeMeScreen'


import HomeScreen from '../screens/HomeScreen'
import ShoppingCartScreen from '../screens/ShoppingCartScreen'

// context theme
import { Context as ThemeContext } from '../context/ThemeColorContext'

import {
    AntDesign,
    Fontisto,
    Octicons,
    Feather
} from '@expo/vector-icons';

// function HomeScreen_({ navigation }) {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Home screen</Text>
//             <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate('Details')}
//             />
//         </View>
//     );
// }

const HomeStack = createStackNavigator();
const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarIcon: ({ tintColor }) => (
                    <Octicons name="home" size={24} color={tintColor} />
                )
            }}
        >
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="ProductByCategorie" component={ProductByCategorieScreen} />
            <HomeStack.Screen name="ProductView" component={ProductViewScreen} />
        </HomeStack.Navigator>
    );
}

const SearchStack = createStackNavigator();
const SearchStackNavigator = () => {
    return (
        <SearchStack.Navigator
            screenOptions={{
                headerShown: false
            }}
            navigationOptions={{
                tabBarIcon: ({ tintColor }) => (
                    <Fontisto name="person" size={24} color={tintColor} />
                )
            }}
        >
            <SearchStack.Screen name="Search" component={SearchScreen} />
            <SearchStack.Screen name="ProductView" component={ProductViewScreen} />
        </SearchStack.Navigator>
    );
}


const ContactStack = createStackNavigator();
const ContactStackNavigator = () => {
    return (
        <ContactStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <ContactStack.Screen name="Contact" component={ContactScreen} />
        </ContactStack.Navigator>
    );
}


const AccountStack = createStackNavigator();
const AccountStackNavigator = () => {
    return (
        <AccountStack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarIcon: ({ color }) => {
                    return <Feather name="shopping-cart" size={24} color={color} />
                },
            }}
        >
            <AccountStack.Screen name="Account" component={AccountScreen} />
            <AccountStack.Screen name="Signin" component={SignInScreen} />
            <AccountStack.Screen name="Signup" component={SignUpScreen} />
        </AccountStack.Navigator>
    );
}

const ShoppingCartStack = createStackNavigator();
const ShoppingCartStackNavigator = () => {
    return (
            <ShoppingCartStack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <ShoppingCartStack.Screen name="shoppingCart" component={ShoppingCartScreen} />
                <ShoppingCartStack.Screen name="order" component={OrderScreen} />
            </ShoppingCartStack.Navigator>
    );
}


const Tab = createBottomTabNavigator();
const TabApp = () => {
    const { state: { colorText, colorBackgroud } } = useContext(ThemeContext);
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    switch (route.name) {
                        case 'Home': return <Octicons name="home" size={size} color={color} />
                        case 'search': return <Octicons name="search" size={size} color={color} />
                        case 'Contact': return <AntDesign name="message1" size={size} color={color} />
                        case 'Account': return <Fontisto name="person" size={size} color={color} />
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: colorText,
                inactiveTintColor: 'rgba(0,0,0,0.6)',
                showLabel: false,
                style: {
                    shadowColor: 'rgba(58,55,55,0.1)',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 1,
                    shadowRadius: 15,
                    elevation: 3,
                    borderTopColor: 'transparent',
                    backgroundColor: colorBackgroud,
                },
                activeTabStyle: {
                    backgroundColor: 'white',
                    borderBottomWidth: 4,
                    borderColor: colorText
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeStackNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="search" component={SearchStackNavigator} />
            <Tab.Screen name="Contact" component={ContactStackNavigator} />
            <Tab.Screen name="Account" component={AccountStackNavigator} />
        </Tab.Navigator>
    );
}



const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
    // <NavigationContainer ref={(ref) => setDrawer(ref)}>
        <Drawer.Navigator drawerContent={(props) => <DrawerContent  {...props} />} >
            <Drawer.Screen name="main" component={TabApp} />
        </Drawer.Navigator>
    // </NavigationContainer>
)




// const SwitchNavigator = createAppContainer(createSwitchNavigator({
//     ResolveAuth: SplashScreen,
//     shoppingCart: ShoppingCartStackNavigator,
//     mainFlow: DrawerNavigator
// }))



const mainStack = createStackNavigator();
const MainStackNavigator = () => {
    return (
        <mainStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <mainStack.Screen name="resolveAuth" component={SplashScreen} />
            <mainStack.Screen name="mainFlow" component={DrawerNavigator} />
            <mainStack.Screen name="shoppingCart" component={ShoppingCartStackNavigator} />
            <mainStack.Screen name="findeMe" component={FindeMeScreen} />
        </mainStack.Navigator>
    );
}



export default app = () => (
    <NavigationContainer ref={navigationRef}>
        <MainStackNavigator />
    </NavigationContainer>
)

