import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    //paddingTop: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 10,
    position: 'relative',
  },
  textStyle: {
    fontSize: 36,
  },
};

export default Header;
