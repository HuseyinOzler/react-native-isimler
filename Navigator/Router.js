import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator
} from 'react-navigation';

import Home from './Pages/Home/index';

const TabBar = createBottomTabNavigator({
Home:{screen:Home}
})

export default createStackNavigator({
    TabBar:TabBar
});