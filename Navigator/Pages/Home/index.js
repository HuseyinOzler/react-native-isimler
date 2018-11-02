
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Postitem from '../../../Components/Postitem';


export default class Home extends Component {

   static navigationOptions = {
     title: 'Esmaül Hüsna',
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
            <Postitem/>
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
