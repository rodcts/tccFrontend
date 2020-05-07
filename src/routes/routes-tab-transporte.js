import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import { Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

//TODO importar as telas
import ScreenTransporte from '../pages/transportador/index';
import ScreenTransporteRota from '../pages/transportador/ativarVeiculo';

const AppNavigator = createBottomTabNavigator(
  {
    ScreenTransporte: { screen: ScreenTransporte },
    TransporteAddRota: { screen: ScreenTransporteRota },
  },
  {
    initialRouteName: 'ScreenTransporte',

    // tabBarOptions: {
    //   showIcon: true,
    //   activeTintColor: '#F8F8F8', // active icon color
    //   inactiveTintColor: '#586589', // inactive icon color
    //   style: {
    //     backgroundColor: '#171F33',
    //   },
    // },

    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        showIcon: true,
        activeTintColor: '#F8F8F8', // active icon color
        inactiveTintColor: '#586589', // inactive icon color
        style: {
          backgroundColor: '#171F33',
        },
      },

      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

        if (focused && routeName === 'ScreenTransporte') {
          return <Ionicons name="md-person" size={25} color="#ffff" />;
        }

        if (focused && routeName === 'TransporteAddRota') {
          return <Icon name="bus" type="font-awesome" color="#ffff" />;
        }
      },
    }),
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
