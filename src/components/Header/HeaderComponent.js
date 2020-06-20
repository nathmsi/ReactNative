import * as React from 'react';
import { Appbar, useTheme, Paragraph, Menu, Divider, Provider } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';


import { openDrawerNav } from '../../navigation/navigationRef';


export default (props) => {
    const { colors } = useTheme();
    const [visible, setVisible] = React.useState(false);
    const {
        goBack,
        title,
        subTitle,
        menu
    } = props;

    return (
        <Appbar.Header
            style={{
                backgroundColor: colors.background
            }}
        >
            {
                goBack ?
                    <Appbar.BackAction
                        onPress={goBack}
                    />
                    :
                    <Appbar.Action
                        icon="menu"
                        onPress={openDrawerNav}
                    />
            }
            <Appbar.Content
                color={colors.primary}
                title={title}
                subtitle={subTitle}
            />
            {
                menu ?
                    <View >
                        <Menu
                            visible={visible}
                            onDismiss={() => setVisible(false)}
                            anchor={
                                // <Button onPress={() => setVisible(true)}>Show menu</Button>
                                <Appbar.Action color={colors.primary} icon="dots-vertical" onPress={() => setVisible(true)} />
                            }
                            style={{
                                marginTop: 40,
                            }}
                        >
                            <Menu.Item titleStyle={{ color: colors.text}} onPress={() => { }} title="Item 1" />
                            <Divider />
                            <Menu.Item titleStyle={{ color: colors.text}} onPress={() => { }} title="Item 2" />
                            <Divider />
                            <Menu.Item  titleStyle={{ color: colors.text}} onPress={() => { }} title="Item 3" />
                        </Menu>
                    </View>
                    : null
            }


        </Appbar.Header>
    )


}