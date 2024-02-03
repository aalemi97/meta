import React from 'react';
import {Alert} from 'react-native';

export const showSingleActionAlert = () =>
  Alert.alert(
    'Subscribed successfully.',
    'Thanks for your subscription, stay tuned!',
    [{text: 'Done'}],
  );
