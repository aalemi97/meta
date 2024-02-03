import React from 'react';
import {
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const greenColor = '#495E57';
const yellowColor = '#F4CE14';
const whiteColor = '#EDEFEE';

export function FeedbackForm() {
  const [firstName, onFirstNameChange] = React.useState('');
  const [lastName, onLastNameChange] = React.useState('');
  const [message, onMessageChange] = React.useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>How was your visit to Little Lemon?</Text>
        <Text style={styles.content}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us!{' '}
        </Text>
        <TextInput
          style={styles.shortInput}
          placeholder="First Name"
          value={firstName}
          onChange={onFirstNameChange}
        />
        <TextInput
          style={styles.shortInput}
          placeholder="Last Name"
          value={lastName}
          onChange={onLastNameChange}
        />
        <TextInput
          style={styles.longInput}
          placeholder="Message"
          value={message}
          onChange={onMessageChange}
          multiline={true}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: greenColor,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: whiteColor,
    padding: 20,
  },
  content: {
    textAlign: 'justify',
    fontSize: 20,
    color: whiteColor,
    padding: 20,
  },
  shortInput: {
    textAlign: 'left',
    fontSize: 16,
    backgroundColor: yellowColor,
    color: greenColor,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  longInput: {
    textAlign: 'left',
    textAlignVertical: 'top',
    fontSize: 20,
    backgroundColor: yellowColor,
    color: greenColor,
    height: 200,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
});
