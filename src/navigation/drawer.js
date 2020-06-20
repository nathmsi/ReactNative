import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Drawer,
    Switch,
    Text,
    TouchableRipple,
    useTheme
} from 'react-native-paper';


import {
    DrawerContentScrollView,
} from '@react-navigation/drawer';


import { Context as ThemeContext } from '../contexts/ThemeColorContext';



const Sidebar = (props) => {

    const { colors } = useTheme();

    const{
        state: {
            darkTheme
        },
        toggleDarkTheme
    } = React.useContext(ThemeContext);

    const user = null;

    const toggle = () => {
        toggleDarkTheme(!darkTheme);
    }


    return (
        <View style={{ flex: 1 , backgroundColor: colors.surface }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                    <View style={styles.userInfoSection}>
                        <TouchableOpacity
                            onPress={() => { if (user) props.navigation.navigate('Account') }}
                        >
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image
                                    source={{
                                        uri: (user && user.photoURL) ? user.photoURL : defaultImgUser
                                    }}
                                    size={50}
                                />
                                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                    <Title style={{ ...styles.title, color: colors.text }}>{(user && user.displayName) ? user.displayName : 'none'}</Title>
                                    <Caption style={{ ...styles.caption, color: colors.text  }}>{user ? user.email : 'none'}</Caption>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <Drawer.Item
                            style={{ backgroundColor: colors.surface }}
                            icon="home-circle"
                            label="Home"
                            onPress={() => props.navigation.navigate('Home')}
                        />
                        <Drawer.Item
                            style={{ backgroundColor: colors.surface }}
                            icon="account-details"
                            label="Detail"
                            onPress={() => props.navigation.navigate('Details')}
                        />
                        <Drawer.Item
                            style={{ backgroundColor: colors.surface }}
                            icon="qrcode"
                            label="Scanner Qr"
                            onPress={() => props.navigation.navigate('Scanner')}
                        />
                    </Drawer.Section>


                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <TouchableRipple onPress={() => { toggle() }}>
                    <View style={styles.preference}>
                        <Text style={{ color: colors.text  , alignSelf: 'center' }}>Dark Theme</Text>
                        <View pointerEvents="none">
                            <Switch color={colors.text}  value={darkTheme} />
                        </View>
                    </View>
                </TouchableRipple>
            </Drawer.Section>
        </View>
    )
}

const defaultImgUser = 'https://firebasestorage.googleapis.com/v0/b/saba-israel.appspot.com/o/images%2Fuser%2Fdefault.png?alt=media&token=0a51820e-ba76-46bb-bd4c-a3934c8c81ed';


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        // borderTopColor: '#f4f4f4',
        // borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

export default Sidebar;
