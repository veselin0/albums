import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default class AlbumList extends Component {
  state = {
    albums: [],
  };

  componentDidMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => this.setState({ albums: response.data }))
      .catch(console.error);
  }

  renderAlbums() {
    return this.state.albums.map((album) => (
      <Text key={album.title}>{album.title}</Text>
    ));
  }

  render() {
    return <View>{this.renderAlbums()}</View>;
  }
}

const styles = StyleSheet.create({});
