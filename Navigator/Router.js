import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    createTabNavigator
} from 'react-navigation';

import Home from './Pages/Home/index';
import Sayac from './Pages/Sayac/İndex';

const İsimler = createStackNavigator({Home:{screen:Home}})
const Tesbih = createStackNavigator({Sayac:{screen:Sayac}})

const TabBar = createBottomTabNavigator({
    İsimler,
    Tesbih
});

export default  createStackNavigator({
    TabBar:{screen:TabBar,navigationOptions:{header:null}},
});