import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';


import HeaderComponent from '../components/Header/HeaderComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  return (
    <View style={{ ...styles.container , backgroundColor: colors.surface  }}>
      <HeaderComponent title="Home Screen" subTitle="defaul" />
      <View style={styles.mainContainer}>
        <Text style={{ margin: 20 }}>HomeScreen</Text>
        <Button  mode="contained"  onPress={() => navigation.navigate('Details')} style={{ margin: 5}}>
          Go to Details
        </Button>
        <Button  mode="contained"  onPress={() => navigation.navigate('Scanner')} style={{ margin: 5}}>
          Go to Scanner
        </Button>
        <Button  mode="contained"  onPress={() => navigation.navigate('ListCards')} style={{ margin: 5}}>
          Go to ListCards
        </Button>
      </View>
    </View>
  );
}


export default HomeScreen;
