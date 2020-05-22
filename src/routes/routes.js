import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ScreenAdministrador from './routes-tab';
import ScreenTransporte from './routes-tab-transporte';
import ScreenListaResponsavel from '../pages/administrador/listar/listarResponsavel/index';
import ScreenListaFuncionario from '../pages/administrador/listar/listarFuncionario/index';
import ScreenListaVeiculo from '../pages/administrador/listar/listarVeiculo/index';
import ScreenAddResponsavel from '../pages/administrador/adicionar/adicionarResponsavel/index';
import ScreenAddFuncionario from '../pages/administrador/adicionar/adicionarFuncionario/index';
import ScreenAddAluno from '../pages/administrador/adicionar/adicionarAluno/index';
import ScreenAddVeiculo from '../pages/administrador/adicionar/adicionarVeiculo/index';
import ScreenResponsavel from '../pages/responsavel/index';
import ScreenLoginResponsavel from '../pages/login/responsavel/index';
import ScreenLoginAdministrador from '../pages/login/administrador/index';
import ScreenLoginTransportador from '../pages/login/transportador/index';
//
import ScreenEditarResponsavel from '../pages/administrador/editar/editarResponsavel/index';
import ScreenEditarFuncionario from '../pages/administrador/editar/editarFuncionario/index';
import ScreenEditarVeiculo from '../pages/administrador/editar/editarVeiculo/index';

const AppNavigator = createStackNavigator(
  {
    LoginResponsavel: {
      screen: ScreenLoginResponsavel,
      navigationOptions: {
        title: ' ',
        headerTintColor: '#FFFF',
        headerShown: false,
       
      },
    },
    Administrador: {
      screen: ScreenAdministrador,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.nome}`,
        headerTintColor: '#FFFF',
        headerStyle: {
          backgroundColor: '#2c6d6a',
        },
      }),
    },

    Transporte: {
      screen: ScreenTransporte,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.nome}`,
      }),
    },
    ListaResponsavel: {
      screen: ScreenListaResponsavel,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.nome}`,
        headerTintColor: '#FFFF',
        headerStyle: {
          backgroundColor: '#2c6d6a',
        },
      }),
    },

    ListaFuncionario: {
      screen: ScreenListaFuncionario,
    },

    ListaVeiculo: {
      screen: ScreenListaVeiculo,
    },

    Mapa: {
      screen: ScreenResponsavel,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.nome}`,
        headerTintColor: '#FFFF',
        headerStyle: {
          backgroundColor: '#2c6d6a',
        },
      }),
    },
    AddResponsavel: {
      screen: ScreenAddResponsavel,
    },
    AddFuncionario: {
      screen: ScreenAddFuncionario,
    },
    AddAluno: {
      screen: ScreenAddAluno,
    },
    AddVeiculo: {
      screen: ScreenAddVeiculo,
    },
  

    LoginAdministrador: {
      screen: ScreenLoginAdministrador,
      navigationOptions: {
        headerShown: false,
        title: 'Administrador',
        headerTintColor: '#FFFF',
        headerStyle: {
          backgroundColor: '#2c6d6a',
        },
      },
    },
    LoginTransportador: {
      screen: ScreenLoginTransportador,
      navigationOptions: {
        headerShown: false,
        title: 'Transportador',
        headerTintColor: '#FFFF',
        headerStyle: {
          backgroundColor: '#2c6d6a',
        },
      },
    },
    EditaResponsavel: {
      screen: ScreenEditarResponsavel,
      navigationOptions: {
        title: 'Editar Responsavel',
        headerTintColor: '#FFFF',
        headerStyle: {
          backgroundColor: '#2c6d6a',
        },
      },
    },

    EditaFuncionario: {
      screen: ScreenEditarFuncionario,
      navigationOptions: {
        title: 'Editar Funcionario',
        headerTintColor: '#FFFF',
        headerStyle: {
          backgroundColor: '#2c6d6a',
        },
      },
    },
    EditaVeiculo: {
      screen: ScreenEditarVeiculo,
      navigationOptions: {
        title: 'Editar Veiculo',
        headerTintColor: '#FFFF',
        headerStyle: {
          backgroundColor: '#2c6d6a',
        },
      },
    },

    InitialRouteName: 'LoginResponsavel',
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#FFFF',
      headerShown: true,
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: '#2c6d6a',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
