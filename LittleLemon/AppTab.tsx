import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WelcomeScreen} from './components/WelcomeScreen';
import {MenuItems} from './components/MenuItems';

const Tab = createBottomTabNavigator();

function AppTab(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerStyle: {backgroundColor: '#F4CE14'},
          headerTintColor: '#495E57',
          tabBarStyle: {backgroundColor: '#F4CE14'},
          tabBarActiveTintColor: '#495E57',
        })}>
        {/* <Tab.Screen name="Welcome" component={WelcomeScreen} /> */}
        <Tab.Screen name="Menu" component={MenuItems} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppTab;
