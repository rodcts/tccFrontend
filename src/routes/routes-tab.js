import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import ScreenListaResponsavel from '../pages/administrador/listar/listarResponsavel';
import ScreenListaAluno from '../pages/administrador/listar/listarAluno';
import ScreenListaFuncionario from '../pages/administrador/listar/listarFuncionario';
import ScreenListaVeiculo from '../pages/administrador/listar/listarVeiculo';

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Responsavel: {
      screen: ScreenListaResponsavel,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={'ios-contacts'}
            />
          </View>
        ),
      },
    },
    Aluno: {
      screen: ScreenListaAluno,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={'ios-contact'}
            />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#a3c2fa',
        barStyle: { backgroundColor: '#2163f6' },
      },
    },
    Funcionario: {
      screen: ScreenListaFuncionario,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={'md-briefcase'}
            />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#92c5c2',
        barStyle: { backgroundColor: '#2c6d6a' },
      },
    },
    Veicculo: {
      screen: ScreenListaVeiculo,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-bus'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#ebaabd',
        barStyle: { backgroundColor: '#d13560' },
      },
    },
  },
  {
    initialRouteName: 'Responsavel',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: { backgroundColor: '#6948f4' },
  },
);

export default createAppContainer(TabNavigator);
