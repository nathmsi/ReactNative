import createDataContext from './createDataContext'

import { AsyncStorage } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

const getLoacalStorage = async () => {
    return await AsyncStorage.getItem("dark");
}

const ThemeColorReducer = (state, action) => {
    switch (action.type) {
        case 'set_theme_color':
            return { ...state, ...action.payload };
        case 'toggle_dark_theme': {
            let Newtheme = {};
            if (action.payload.darkTheme) {
                Newtheme = {
                    ...state.theme,
                    colors: {
                        ...state.theme.colors,
                        primary: '#fff',
                        text: '#fff',
                        background: '#424242',
                        surface: '#424242',
                    }
                }
            } else {
                Newtheme = {
                    ...state.theme,
                    colors: {
                        ...state.theme.colors,
                        primary: '#fff',
                        text: '#34495E',
                        background: '#34495E',
                        surface: '#fff'
                    }
                }
            }
            AsyncStorage.setItem('dark', action.payload.darkTheme ? 'dark' : 'not-dark');
            return { ...state, darkTheme: action.payload.darkTheme, theme: Newtheme };
        }
        default: return state;
    }
}

const toggleDarkTheme = (dispatch) => {
    return async (darkTheme) => {
        dispatch({
            type: 'toggle_dark_theme',
            payload: {
                darkTheme: darkTheme
            }
        });
    }
}

const setLocalStorage = (dispatch) => {
    return async () => {
        const darkTheme = await getLoacalStorage();
        console.log(darkTheme);
        dispatch({
            type: 'toggle_dark_theme',
            payload: {
                darkTheme: darkTheme === 'dark' ? true : false
            }
        });
    }
}


export const { Context, Provider } = createDataContext(
    ThemeColorReducer,
    {
        toggleDarkTheme,
        setLocalStorage
    },
    {
        theme: {
            ...DefaultTheme,
            roundness: 2,
            colors: {
                ...DefaultTheme.colors,
                primary: '#fff',
                text: '#34495E',
                background: '#34495E',
                surface: '#fff'
            }
        },
        darkTheme: false
    }
);