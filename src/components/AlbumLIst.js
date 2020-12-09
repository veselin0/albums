import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default class AlbumList extends Component {
  state = {};

  UNSAFE_componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => this.setState({ albums: response.data }));
  }

  render() {
    console.log(this.state);

    return (
      <View>
        <Text>Album List!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
