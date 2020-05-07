import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Icon } from 'react-native-elements';

//TODO importar as telas
import ScreenListaResponsavel from '../pages/administrador/listar/listarResponsavel';
import ScreenListaAluno from '../pages/administrador/listar/listarAluno';
import ScreenListaFuncionario from '../pages/administrador/listar/listarFuncionario';
import ScreenListaVeiculo from '../pages/administrador/listar/listarVeiculo';

const AppNavigator = createBottomTabNavigator(
  {
    ResponsavelLista: { screen: ScreenListaResponsavel },
    AlunoLista: { screen: ScreenListaAluno },
    FuncionarioLista: { screen: ScreenListaFuncionario },
    VeiculoLista: { screen: ScreenListaVeiculo },
  },
  {
    initialRouteName: 'ResponsavelLista',

    tabBarOptions: {
      showLabel: true,
      // activeTintColor: '#000',
      activeTintColor: '#F8F8F8', // active icon color
      inactiveTintColor: '#586589', // inactive icon color
      style: {
        // backgroundColor: '#fff',
        backgroundColor: '#171F33',
      },
    },

    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        style: { backgroundColor: '#171F33' },
        tabStyle: {
          padding: 0,
          marginTop: 0, //Padding 0 here
        },
      },

      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

        if (focused && routeName === 'ResponsavelLista') {
          return <Icon name="users" type="font-awesome" color="#ffff" underlayColor="#0000"/>;
        }

        if (focused && routeName === 'AlunoLista') {
          return <Icon name="child" type="font-awesome"color="#ffff"/>;
        }
        if (focused && routeName === 'FuncionarioLista') {
          return <Icon name="briefcase" type="font-awesome" color="#ffff"/>;
        }
        if (focused && routeName === 'VeiculoLista') {
          return <Icon name="bus" type="font-awesome" color="#ffff"/>;
        }
      },
    }),
  },
);


const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;