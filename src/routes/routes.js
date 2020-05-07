import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ScreenAdministrador from './routes-tab';
import ScreenTransporte from './routes-tab-transporte';
import ScreenListaResponsavel from '../pages/administrador/listar/listarResponsavel/index';
import ScreenListaFuncionario from '../pages/administrador/listar/listarFuncionario/index';
// import ScreenListaAlunosAddTransporte from '../pages/transportador/index';
import ScreenListaVeiculo from '../pages/administrador/listar/listarVeiculo/index';
import ScreenAddResponsavel from '../pages/administrador/adicionar/adicionarResponsavel/index';
import ScreenAddFuncionario from '../pages/administrador/adicionar/adicionarFuncionario/index';
import ScreenAddAluno from '../pages/administrador/adicionar/adicionarAluno/index';
import ScreenAddVeiculo from '../pages/administrador/adicionar/adicionarVeiculo/index';
import ScreenResponsavel from '../pages/responsavel/index';
import ScreenLoginResponsavel from '../pages/login/responsavel/index';
import ScreenLoginAdministrador from '../pages/login/administrador/index';
import ScreenLoginTransportador from '../pages/login/transportador/index';
import ScreenEditarResponsavel from '../pages/administrador/editar/editarResponsavel/index';
import ScreenEditarFuncionario from '../pages/administrador/editar/editarFuncionario/index';
import ScreenEditarVeiculo from '../pages/administrador/editar/editarVeiculo/index';

const AppNavigator = createStackNavigator(
  {
    LoginResponsavel: {
      screen: ScreenLoginResponsavel,
      navigationOptions: {
        title: 'Responsavel',
      },
    },
    Administrador: {
      screen: ScreenAdministrador,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.nome}`,
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
    // Mapa: {
    //   screen: ScreenResponsavel,
    //   // navigationOptions: {
    //   //   title: 'Mapa',
    //   // },
    // },

    LoginAdministrador: {
      screen: ScreenLoginAdministrador,
      navigationOptions: {
        title: 'Administrador',
      },
    },
    LoginTransportador: {
      screen: ScreenLoginTransportador,
      navigationOptions: {
        title: 'Transportador',
      },
    },
    EditaResponsavel: {
      screen: ScreenEditarResponsavel,
      navigationOptions: {
        title: 'Editar Responsavel',
      },
    },

    Editafuncionario: {
      screen: ScreenEditarFuncionario,
      navigationOptions: {
        title: 'Editar Funcionario',
      },
    },
    EditaVeiculo: {
      screen: ScreenEditarVeiculo,
      navigationOptions: {
        title: 'Editar Veiculo',
      },
    },

    InitialRouteName: 'LoginResponsavel',
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#000',
      headerShown: true,
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
