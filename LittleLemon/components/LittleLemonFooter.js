import React from 'react';
import {Text, View} from 'react-native';

const viewStyle = {
  backgroundColor: '#F4CE14',
};

const textStyle = {
  fontSize: 18,
  color: 'black',
  textAlign: 'center',
  marginTop: 5,
};

function LittleLemonFooter() {
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>All rights reserved by Little Lemon, 2022 </Text>
    </View>
  );
}

export default LittleLemonFooter;
