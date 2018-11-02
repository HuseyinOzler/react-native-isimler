import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';


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
                        this.props.navigation.navigate('Detail',{itemId:item.aciklama,isim:item.titleOne})
                  }}

                  
                >
                  <View style={styles.kutu} >
                        
                        <Text style={styles.yazi} > {item.titleNumber} </Text>
                        <Text style={styles.yazi} > {item.titleOne} </Text>
                        <Text style={styles.yazi} > {item.titleTwo} </Text>
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
  disKutu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  kutu: {
    alignItems:'center',
    justifyContent: 'space-around',
    flexDirection:'row',
    width: 370,
    height: 80,
    backgroundColor: '#fff',
    margin: 5,
    borderWidth: 4,
    borderColor:'#fff'
  },
  yazi:{
    fontSize:16
  },

});

export default withNavigation(HomeScreen);