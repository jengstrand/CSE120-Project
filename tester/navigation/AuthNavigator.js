import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import  volunteersignup  from '../screens/volunteersignup';
import nonprofitsignup from "../screens/nonprofitsignup";


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
    },

    nonprofitsignup:{
      title:'Nonprofit sign up',
      screen: nonprofitsignup
  }

}
const AuthNavigator = createStackNavigator(screens);
export default createAppContainer(AuthNavigator);