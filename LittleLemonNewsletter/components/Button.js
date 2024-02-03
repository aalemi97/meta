import React from 'react';
import {Text, View, Pressable, StyleSheet, Dimensions} from 'react-native';
import colors from '../utils/colors';

function Button({title, disabled, onPress}) {
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <View style={disabled ? styles.buttonDisabled : styles.button}>
        <Text style={disabled ? styles.titleDisabled : styles.title}>
          {title}
        </Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    width: Dimensions.get('window').width - 60,
    height: 50,
    margin: 30,
    marginTop: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonDisabled: {
    width: Dimensions.get('window').width - 60,
    height: 50,
    margin: 30,
    marginTop: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.green,
    textAlign: 'center',
  },
  titleDisabled: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.yellow,
    textAlign: 'center',
  },
});
