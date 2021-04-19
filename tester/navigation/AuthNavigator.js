import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import  volunteersignup  from '../screens/volunteersignup';



// const Stack = createStackNavigator();

// const AuthNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen
//       name="Home"
//       component={Home}
//       options={{ headerShown: false }}
//     />
//     <Stack.Screen name="Volunteer Registration" component={volunteersignup} />
//   </Stack.Navigator>
// );

//  export default createAppContainer(AuthNavigator);

const screens = {
    Home: {
        backgroundColor: "navyblue",
        screen:Home
    },

    volunteersignup:{
        title:'Volunteer sign up',
        screen: volunteersignup
    }
}
const AuthNavigator = createStackNavigator(screens);
export default createAppContainer(AuthNavigator);