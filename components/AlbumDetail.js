import React from 'react';
import {View, Text, StyleSheet, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({album}) => {
  const { title, artist, thumbnail_image, image, url } = album;
  const { headerContent, 
          thumbnailStyle, 
          thumbnailContainerStyle,
          headerTextStyle,
          imageStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image 
              style={thumbnailStyle} 
              source={{uri: thumbnail_image}}
          />
        </View>
        <View style={headerContent}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyle} source={{uri: image}}/>
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)} text={"Buy " + title}/>
      </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: "column",
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50, 
    width: 50,
    borderRadius: 5
  },
  thumbnailContainerStyle: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    height: 400,
    width: null,
    flex: 1
  }
})

export default AlbumDetail; 