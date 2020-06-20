import * as React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';


let navigator;
let navigation;



export const navigationRef = React.createRef();

export function navigate(name, params) {
    navigationRef.current?.navigate(name, params);
}

export function replace(name, params) {
    navigationRef.current?.dispatch(StackActions.replace(name,params));
}

export function pop() {
    navigationRef.current?.dispatch(StackActions.pop());
}


export function push(...args) {
    navigationRef.current?.dispatch(StackActions.push(...args));
}


export const setNavigator = (nav) => {
    navigator = nav;
}

export const setDrawer = (_navigation) => {
    navigation = _navigation;
}


export const openDrawerNav = () => {
    //navigationRef.dispatch(DrawerActions.openDrawer())
    navigationRef.current?.dispatch(DrawerActions.openDrawer());
}