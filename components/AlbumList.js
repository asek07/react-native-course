import React, {Component} from 'react';
import {ScrollView, View, Text} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  constructor() {
    super();
    this.state = {
      albums: []
    }
  }

  componentWillMount() {
    console.log("LOGGIN FROM THE CONSOLE!")
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({albums: response.data}));   
  }

  renderAlbums = () => {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>)
  }

  render() {
    console.log("data coming in from axios populated...", this.state.albums)

    return (
      <ScrollView>
       {this.renderAlbums()}
      </ScrollView>
    )
  }
}

export default AlbumList;