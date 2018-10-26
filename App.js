import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import AlmbumList from './components/AlbumList';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Home'} />
        <AlmbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    flex: 1
  },
});
