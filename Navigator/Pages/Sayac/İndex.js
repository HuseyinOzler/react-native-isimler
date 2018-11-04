

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



export default class Sayac extends Component{
  render() {
    const { navigation } = this.props;
    const isim = navigation.getParam('isim');
    return (
      <View style={styles.container}>
       <Text>Sayac</Text>
       <Text> {isim} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
