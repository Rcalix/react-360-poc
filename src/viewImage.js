    
import React from 'react';
import { AppRegistry, asset, Pano, Text, View, Image }  from 'react-360';

export default class ViewImage extends React.Component {
  render() {
    return (
        <View
          style={{
            width: 1000,
            height: 600,
            backgroundColor: '#FFF',
            layoutOrigin: [0.5, 0.5],
            transform: [{ translate: [0, 0, -3] }],
            justifyContent: 'space-between'
          }}
        >
          <Image
            source={{ uri: '../static_assets/mountains.jpg' }}
            style={{
              height: 500
            }}
          />
          <Text
            style={{
              color: '#333',
              fontSize: 0.16,
              textAlign: 'center'
            }}
          >
            Explore Austria with its wonderful ski resorts.
          </Text>
          <View
            style={{
              flexDirection: 'row'
            }}
          >
            <Image
              source={{ uri: '../static_assets/thumb1.jpg' }}
              style={{
                width: 200,
                height: 100
              }}
            />
            <Image
              source={{ uri: '../static_assets/thumb2.jpg' }}
              style={{
                width: 200,
                height: 100
              }}
            />
            <Image
              source={{ uri: '../static_assets/thumb3.jpg' }}
              style={{
                width: 200,
                height: 100
              }}
            />
            <Image
              source={{ uri: '../static_assets/thumb4.jpg' }}
              style={{
                width: 200,
                height: 100
              }}
            />
          </View>
        </View>
    );
  }
}