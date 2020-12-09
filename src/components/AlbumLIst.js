import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AlbumList extends Component {
  UNSAFE_componentWillMount() {
    console.log('Component will mount in AlbumList');
  }

  render() {
    return (
      <View>
        <Text>Album List!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
