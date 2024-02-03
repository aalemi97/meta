import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Pressable,
} from 'react-native';

const greenColor = '#495E57';
const yellowColor = '#F4CE14';
const whiteColor = '#EDEFEE';

const LittleLemonInput = ({
  placeholder,
  value,
  onChange,
  keyboardType,
  secureTextEntry,
}) => {
  return (
    <View>
      <Text style={styles.text}>{placeholder}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        clearButtonMode="while-editing"
      />
    </View>
  );
};

const Button = ({title, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </Pressable>
  );
};

export function Login({navigation}) {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={20}>
      <ScrollView keyboardDismissMode="on-drag">
        {loggedIn && <Text style={styles.header}>You are logged in!</Text>}
        {!loggedIn && (
          <View>
            <Text style={styles.header}>Login To continue</Text>
            <LittleLemonInput
              placeholder="Email Address"
              value={email}
              onChange={onChangeEmail}
              keyboardType="email-address"
              secureTextEntry={false}
            />
            <LittleLemonInput
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
              keyboardType="default"
              secureTextEntry={true}
            />
            <Button
              title="Login"
              onPress={() => {
                setLoggedIn(!loggedIn);
                navigation.navigate('Menu');
              }}
            />
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greenColor,
  },
  header: {
    color: whiteColor,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingVertical: 20,
  },
  text: {
    color: whiteColor,
    fontSize: 20,
    padding: 20,
    paddingBottom: 0,
  },
  input: {
    backgroundColor: yellowColor,
    color: greenColor,
    fontSize: 20,
    height: 50,
    borderRadius: 10,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
  },
  button: {
    height: 45,
    margin: 20,
    backgroundColor: whiteColor,
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 20,
    textAlign: 'center',
    color: greenColor,
    padding: 10,
  },
});
