import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    createTabNavigator
} from 'react-navigation';

import Home from './Pages/Home/index';
import Sayac from './Pages/Sayac/İndex';

const HomeBar = createStackNavigator({Home:{screen:Home}})
const SayacBar = createStackNavigator({Sayac:{screen:Sayac}})

const TabBar = createBottomTabNavigator({
    HomeBar,
    SayacBar
});

export default  createStackNavigator({
    TabBar:{screen:TabBar,navigationOptions:{header:null}},
});