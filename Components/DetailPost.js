
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



 class DetailPost extends Component{
  render() {
    return (
      <View style={styles.container}>
          <View>
            <View style={styles.kutu} >
                <Text>asdasd</Text>
                 <Text>asdasd</Text>
                  <Text>asdasd</Text>
                  <Text>asdasd</Text>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  kutu:{
    backgroundColor:'green',
    margin: 10,
  }

});


export default DetailPost;