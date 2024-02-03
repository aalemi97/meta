import React from 'react';
import {Text, Image, SafeAreaView, StyleSheet} from 'react-native';
import Button from '../components/Button';
import colors from '../utils/colors';

function HomeScreen(props: any): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/little-lemon-logo.png')}
      />
      <Text style={styles.text}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Button
        title={'Newsletter'}
        disabled={false}
        onPress={() => props.navigation.navigate('Subscribe')}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
    justifyContent: 'center',
  },
  logo: {
    backgroundColor: colors.white,
    width: 110,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
    margin: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginHorizontal: 30,
    marginBottom: 20,
  },
});
