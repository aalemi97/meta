import React from 'react';
import {
  Text,
  TextInput,
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import Button from '../components/Button';
import colors from '../utils/colors';
import {validateEmail} from '../utils';
import {ScrollView} from 'react-native-gesture-handler';
import {showSingleActionAlert} from '../components/Alerts';

function SubscribeScreen(): React.JSX.Element {
  const [email, setEmail] = React.useState('');
  const [didSubscribe, setDidSubscribe] = React.useState(false);
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [blurred, setBlurred] = React.useState(false);
  const [isTouched, setIsTouched] = React.useState(false);

  function onChangeEmail(email: string) {
    setEmail(email);
    setIsEmailValid(validateEmail(email));
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={80}>
        <ScrollView indicatorStyle="white">
          <Image
            style={styles.logo}
            source={require('../assets/little-lemon-logo-grey.png')}
          />
          <Text style={styles.text}>
            Subscribe to our newsletter for our latest delicious receipt
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={email}
            onChangeText={onChangeEmail}
            clearButtonMode="while-editing"
            onFocus={() => setIsTouched(true)}
            onBlur={() => setBlurred(true)}
          />
          {isTouched && blurred && !isEmailValid && (
            <Text style={styles.error}>
              Please enter a valid email address!
            </Text>
          )}
          <Button
            title={'Subscribe'}
            disabled={!isEmailValid || didSubscribe}
            onPress={() => {
              setDidSubscribe(true);
              setEmail('');
              showSingleActionAlert();
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.green,
    justifyContent: 'center',
  },
  logo: {
    backgroundColor: colors.white,
    width: 100,
    height: 115,
    alignSelf: 'center',
    resizeMode: 'contain',
    margin: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginHorizontal: 30,
  },
  input: {
    width: Dimensions.get('window').width - 60,
    height: 50,
    marginHorizontal: 30,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    color: colors.green,
    fontSize: 20,
    paddingLeft: 10,
  },
  error: {
    fontSize: 15,
    color: colors.yellow,
    marginHorizontal: 30,
    marginTop: 0,
    marginBottom: 10,
  },
});
