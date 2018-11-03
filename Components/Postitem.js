import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';

import {
  robotoWeights
} from 'react-native-typography';

import {withNavigation} from 'react-navigation';

export class HomeScreen extends Component {

    constructor(props){
     super(props)
     console.log('propslar',props)
     this.state = {
       datasource:[]
     }
   }

   renderItem = ({item}) => {
     return(
       <View >
         <Text> {item.titleNumber} </Text>
         <Text> {item.titleOne} </Text>
         <Text> {item.titleTwo} </Text>
       </View>
     )
   }


   componentDidMount(){
     return fetch('https://hsyn-api.herokuapp.com/api/text/list')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.bsk,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }


    render() {

        return (
             <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>

          <View style={styles.container} >
              <View style={styles.disKutu}>


                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('Detail',
                        {
                        isim: item.titleOne,
                        arapca: item.titleTwo,
                        aciklama:item.aciklama,
                        })
                  }}
                

                  
                >
                  <View style={styles.kutu} >
                        
                        <Text style={robotoWeights.ultraLight} > {item.titleNumber} </Text>
                        <Text style={robotoWeights.ultraLight} > {item.titleOne} </Text>
                        <Text style={robotoWeights.ultraLight} > {item.titleTwo} </Text>
                  </View>

                </TouchableOpacity>




              </View>
          </View>

          }
          keyExtractor={({ id }, index) => id}
        />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
 
  kutu: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:'#fff',
    margin:3,
    borderRadius:20,
    padding:20
  },


});

export default withNavigation(HomeScreen);