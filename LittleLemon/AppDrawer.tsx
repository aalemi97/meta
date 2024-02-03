import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {WelcomeScreen} from './components/WelcomeScreen';
import {MenuItems} from './components/MenuItems';

const Drawer = createDrawerNavigator();

export function AppDrawer(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#F4CE14'},
          headerTintColor: '#495E57',
          drawerActiveTintColor: '#F4CE14',
          drawerInactiveTintColor: '#EDEFEE',
          drawerContentStyle: {backgroundColor: '#495E57'},
        }}>
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Menu" component={MenuItems} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
