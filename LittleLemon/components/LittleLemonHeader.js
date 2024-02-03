import React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';

export default function () {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Little Lemon</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4CE14',
  },
  text: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
