import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavegation } from 'react-navigation';


import Login from './Login';
import Cadastro from './Cadastro';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';





const MainNav = createStackNavigator (
{
    login: {
         screen: Login,
         navigationOptions: {
           header: null
         }
    },
    Cadastro: {
      screen: Cadastro,
      navegationOptions: {
          header: null
      }
  },
    Home: {
        screen: Home,
        navegationOptions: {
              headerTitle: 'Home'
        }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        header: null
      }
 },
 Settings: {
  screen: Settings,
  navigationOptions: {
    header: null
  }
},
    
})

export default createAppContainer(MainNav);

