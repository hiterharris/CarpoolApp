import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import InviteScreen from './screens/InviteScreen';
import CarpoolsScreen from './screens/CarpoolsScreen';
import PickupScreen from './screens/PickupScreen';

export default class App extends React.Component {
    render() {
      return <AppContainer />;
    }
  }

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Invite: InviteScreen,
        Carpools: CarpoolsScreen,
        Pickup: PickupScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: '#4267B2',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          },
    }
);

const AppContainer = createAppContainer(AppNavigator)