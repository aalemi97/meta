/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import {WelcomeScreen} from './components/WelcomeScreen';
import {MenuItems} from './components/MenuItems';
import {FeedbackForm} from './components/FeedbackForm';
import {Login} from './components/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerStyle: {backgroundColor: '#F4CE14'},
            headerTintColor: '#495E57',
            headerBackTitleStyle: {},
          }}>
          <Stack.Screen
            name="Home"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Menu" component={MenuItems} />
        </Stack.Navigator>
      </View>
      {/* <FeedbackForm /> */}
      <SafeAreaView style={styles.footer}>
        <LittleLemonFooter />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
  footer: {
    backgroundColor: '#F4CE14',
  },
});
