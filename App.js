import React from 'react';
import {TabNavigator} from 'react-navigation';

import {Home} from './app/screens/Home';
import {Heroes} from './app/screens/Heroes';
import {Settings} from './app/screens/Settings';

const Tab = TabNavigator({
  Home: {
    screen: Home,
  },
  Heroes: {
    screen: Heroes,
  },
  Settings: {
    screen: Settings,
  }
},{
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions:{
    activeTintColor: '#f2f2f2',
    activeBackgroundColor: '#2ec4b6',
    inactiveTintColor: '#666',
    labelStyle: {
      fontSize: 12,
      padding: 5,
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Tab/>
    );
  }
}