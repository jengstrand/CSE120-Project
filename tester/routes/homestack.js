import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import  volunteersignup  from '../screens/volunteersignup';

const screens = {
    Home: {
        screen:Home
    },

    volunteersignup:{
        screen: volunteersignup
    }
}

const homestack = createStackNavigator(screens);

export default createAppContainer(homestack);