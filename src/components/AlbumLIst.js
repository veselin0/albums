import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default class AlbumList extends Component {
  UNSAFE_componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => console.log(response));
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
