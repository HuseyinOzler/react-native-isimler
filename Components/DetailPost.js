
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
import {
  withNavigation
} from 'react-navigation';


 class DetailPost extends Component{
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId');
    
    return (
      <View style={styles.container}>
          <View>
            <View style={styles.kutu} >
            
               
                <Text>itemId: {JSON.stringify(itemId)}</Text>
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


export default withNavigation (DetailPost);