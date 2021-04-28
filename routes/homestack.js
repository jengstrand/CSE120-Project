import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import volunteersignup from "../screens/volunteersignup";
import nonprofitsignup from "../screens/nonprofitsignup";
import nonprofitprofile from "../screens/nonprofitprofile";
import volunteerprofile from "../screens/volunteerprofile";
import createevent from "../screens/createevent";
import ListingsScreen from "../screens/ListingsScreen";
import ListingsScreenVolunteer from "../screens/ListingsScreenVolunteer";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown:false
    }
  },

  volunteersignup: {
    screen: volunteersignup,
    navigationOptions: {
      title: 'Volunteer sign up'
    }
  },

  nonprofitsignup: {
    screen: nonprofitsignup,
    navigationOptions: {
      title: 'Nonprofit sign up'
      
    }
  },

  nonprofitprofile: {
    screen: nonprofitprofile,
    navigationOptions: {
      headerShown:false
    }
  },

  volunteerprofile: {
    screen: volunteerprofile,
    navigationOptions: {
      headerShown:false
    }
  },

  createevent: {
    screen: createevent,
    navigationOptions: {
      title: 'Create Event'
    }
  },

  ListingsScreen: {
    screen: ListingsScreen,
    navigationOptions: {
      title: 'Manage Events'
    }
  },
  ListingsScreenVolunteer: {
    screen: ListingsScreenVolunteer,
    navigationOptions: {
      title: 'Browse Events'
    }
  },

};

const homestack = createStackNavigator(screens);

export default createAppContainer(homestack);
