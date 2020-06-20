import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text, Button, Paragraph, Avatar, Card, Title, useTheme, IconButton, Searchbar } from 'react-native-paper';


import HeaderComponent from '../components/Header/HeaderComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  }
});


const DetailsSreen = ({ navigation }) => {

  const { colors } = useTheme();
  const [value, setValue] = React.useState('');
  return (
    <View style={{ ...styles.container, backgroundColor: colors.surface }}>
      <HeaderComponent title="Detail Screen" subTitle="defaul" goBack={() => navigation.goBack()} menu={true} />
      <View style={{ flex: 1   }}>
        <Searchbar
          placeholder="Search"
          onChangeText={setValue}
          value={value}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={{ alignSelf: 'center' ,margin: 20 }} >HomeScreen</Text>
        <Button  color={colors.text} onPress={() => navigation.navigate('Home')} >
          Go to Home
        </Button>
      </View>
      <View style={{ flex: 4  }}>
        <Card>
          <Card.Title
            title="Card Title"
            subtitle="Card Subtitle"
            left={(props) => <Avatar.Icon {...props} color={colors.text} icon="folder" />}
            right={(props) => <IconButton {...props} color={colors.text} icon="dots-vertical" onPress={() => { }} />}
          />
          <Card.Content>
            <Title color={colors.text}>Card title</Title>
            <Paragraph color={colors.text} >Card content</Paragraph>
          </Card.Content>
          <Card.Cover  source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button color={colors.text} onPress={() => {}}>Cancel</Button>
            <Button color={colors.text} onPress={() => {}}  > Ok</Button>
          </Card.Actions>
        </Card>
      </View>

    </View>
  );
}


export default DetailsSreen;