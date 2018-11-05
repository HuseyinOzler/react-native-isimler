

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';



export default class Sayac extends Component{

  
  render() {
    const { navigation } = this.props;
    const isim = navigation.getParam('isim');
    return (
     <View style={styles.container} >
        <View>
          <View style={styles.kt1} ></View>
        </View>

       
          <View style={styles.kt2} >
           <Text style={{fontSize:100}}>0</Text>
          </View>
        
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    
  },
  kt1:{
    borderWidth:1,borderColor:'red',marginLeft:40,marginRight:40,borderRadius:100,padding:30,marginTop:30
  },
  kt2:{
    borderWidth:1,borderColor:'red',marginLeft:40,marginRight:40,borderRadius:200,padding:90,marginTop:40,justifyContent: 'center',
    alignItems: 'center',
  }
  

});
