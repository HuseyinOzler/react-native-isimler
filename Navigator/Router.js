import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    createTabNavigator
} from 'react-navigation';

import Home from './Pages/Home/index';
import Sayac from './Pages/Sayac/İndex';
import Detail from './Pages/Detail/İndex';
import Detailpost from '../Components/DetailPost';
import Postitem from '../Components/Postitem';

const İsimler = createStackNavigator({Home:{screen:Home}})
const Tesbih = createStackNavigator({Sayac:{screen:Sayac}})


const TabBar = createBottomTabNavigator({
    İsimler,
    Tesbih
},{
    tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: '#fff',
        },
    }
});

export default  createStackNavigator({
    TabBar:{screen:TabBar,navigationOptions:{header:null}},
    Detail:{screen:Detail},
    Detailpost:{screen:Detailpost},
    Postitem:{screen:Postitem}
    
   
});