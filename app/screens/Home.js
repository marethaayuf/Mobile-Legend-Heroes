import React, {Component} from 'react';
import {Container, Content, Thumbnail, Button} from 'native-base';
import {Scrollview, Text, StyleSheet, Image, View} from 'react-native';

export class Home extends React.Component{
  render(){
    return(
      <View>
          <Image
           style={{alignItems: 'center', width: 350, height:200, marginBottom: 30, marginTop:30, }}
            source={{uri: 'http://cdn-www.bluestacks.com/bs-images/mobile-legends_logo.png'}}
          />

          <Text style={nbStyles.subtitle}>
            Welcome to Mobile Legends
          </Text>
          <Text style={nbStyles.subtitle}>
            Heroes Dictionary
          </Text>
          <Text style={nbStyles.subtitle}>
            Start Exploring or Creating
          </Text>
          <Text style={nbStyles.subtitle}>
            Your Favourite Heroes
          </Text>

          <Button block style={nbStyles.btn}  onPress={() => this.props.navigation.navigate('Heroes')}
          >
            <Text style={{color: 'white'}}>Start</Text>
          </Button>
        </View>
    );
  }
}

const nbStyles = {
  subtitle: {
    textAlign: 'center',
    color: 'black'
  },
  btn: {
    alignItems: 'center',
    marginTop: 30,
    borderRadius: 25,
    backgroundColor: 'blue',
    marginVertical: 10,
    paddingVertical: 13,
  },
}