
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Detailitem from '../../../Components/DetailPost';
export default class DetailScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
         <Detailitem/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
 

});
