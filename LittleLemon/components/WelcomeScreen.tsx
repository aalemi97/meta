import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const title: String = 'Little Lemon';
const subtitle: String =
  'Little Lemon is a charming neighborhood bistro\
   that serves simple food and classic cocktails\
    in a lively but casual environment.\
     We would love to hear more about your experience with us!';

const whiteColor = '#EDEFEE';

export function WelcomeScreen(props: any): React.JSX.Element {
  console.log(props);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Image
          style={styles.logo}
          source={require('../img/littleLemonLogo.png')}
        />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <ScrollView indicatorStyle="white">
          <Text style={styles.subtitle}>{subtitle}</Text>
        </ScrollView>
        <Pressable
          onPress={() => {
            props.navigation.navigate('Login');
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonTitle}>Next</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  titleBox: {
    backgroundColor: '#495E57',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 86,
    height: 100,
    resizeMode: 'contain',
    backgroundColor: whiteColor,
    margin: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
    color: '#EDEFEE',
  },
  subtitle: {
    textAlign: 'justify',
    fontSize: 20,
    color: '#EDEFEE',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#EDEFEE',
    height: 50,
    width: 100,
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#495E57',
    padding: 7,
  },
});
