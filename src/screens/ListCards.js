import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text, Button, Paragraph, Avatar, Card, Title, useTheme, IconButton, Searchbar } from 'react-native-paper';


import HeaderComponent from '../components/Header/HeaderComponent';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
    }
});



const ListCardScreen = ({ navigation }) => {

    const { colors } = useTheme();
    const [value, setValue] = React.useState('');
    return (
        <View style={{ ...styles.container, backgroundColor: colors.surface }}>
            <HeaderComponent title="ListCards Screen" subTitle="cards" goBack={() => navigation.goBack()} menu={true} />
            <Searchbar
                placeholder="Search"
                onChangeText={setValue}
                value={value}
            />
            <ScrollView style={{  }}>

                {
                    DATA.map(
                        menu => (
                            <Card key={menu.categorie} >
                                <Card.Title
                                    title={menu.categorie}
                                    subtitle="Card Subtitle"
                                    left={(props) => <Avatar.Icon {...props}  icon="folder" />}
                                    right={(props) => <IconButton {...props} color={colors.text} icon="update" onPress={() => { }} />}
                                />
                            </Card>
                        )
                    )
                }
                {
                    DATA.map(
                        menu => (
                            <Card key={menu.categorie} >
                                <Card.Title
                                    title={menu.categorie}
                                    subtitle="Card Subtitle"
                                    left={(props) => <Avatar.Icon {...props} icon="folder" />}
                                    right={(props) => <IconButton {...props} color={colors.text} icon="folder" onPress={() => { }} />}
                                />
                            </Card>
                        )
                    )
                }
            </ScrollView>

        </View>
    );
}

const DATA =
    [
        {
            "categorie": "Kippots",
            "value": [
                "Kippots",
                "Clips"
            ]
        },
        {
            "categorie": "Pessah",
            "value": [
                "Pessah"
            ]
        },
        {
            "categorie": "Mezouzots",
            "value": [
                "Mezouzots",
                "Klafims"
            ]
        },
        {
            "categorie": "Hanouka",
            "value": [
                "Hanouka",
                "Oil"
            ]
        },
        {
            "categorie": "Tallits",
            "value": [
                "Tallits"
            ]
        },
        {
            "categorie": "Tefilins",
            "value": [
                "Tefilins"
            ]
        },
        {
            "categorie": "Books",
            "value": [
                "Books"
            ]
        },
        {
            "categorie": "Breslev",
            "value": [
                "Breslev"
            ]
        }
    ]

export default ListCardScreen;