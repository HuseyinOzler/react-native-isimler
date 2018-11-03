
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Detailitem from '../../../Components/DetailPost';
export default class DetailScreen extends Component{

 
   static navigationOptions = {
     title: 'esmaül hüsna',
     headerStyle: {
       backgroundColor: '#5CB3C7',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold',
     },
   };

  render() {
     
    return (
      <View style={styles.container}>
         <Detailitem />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
 

});
