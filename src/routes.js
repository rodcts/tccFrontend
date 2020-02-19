import React from 'react';
// import {TouchableOpacity, Image, View} from 'react-native';
// import {Icon, Button} from 'react-native-material-ui';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ScreenChangeLogin from './pages/changeLogin/index';
import ScreenAdministrador from './pages/administrador/index';
import ScreenListaResponsavel from './pages/administrador/listarResponsavel/index';
import ScreenEditarResponsavel from './pages/administrador/editarResponsavel/index';
import ScreenListaFuncionario from './pages/administrador/listarFuncionario/index';
import ScreenEditarFuncionario from './pages/administrador/editarFuncionario/index';
import ScreenListaVeiculo from './pages/administrador/listarVeiculo/index';
import ScreenEditarVeiculo from './pages/administrador/editarVeiculo/index';
import ScreenResponsavel from './pages/responsavel/index';
import ScreenLoginResponsavel from './pages/login/responsavel/index';
import ScreenLoginAdministrador from './pages/login/administrador/index';
import ScreenLoginTransportador from './pages/login/transportador/index';

const AppNavigator = createStackNavigator(
  {
    // ChangeLogin: {
    //   screen: ScreenChangeLogin,
    // },
    LoginResponsavel: {
      screen: ScreenLoginResponsavel,
      navigationOptions: {
        title: 'Responsavel ',
      },
    },
    Administrador: {
      screen: ScreenAdministrador,
      navigationOptions: {
        title: 'Administrador',
      },
    },
    ListaResponsavel: {
      screen: ScreenListaResponsavel,
    },
    EditaResponsavel: {
      screen: ScreenEditarResponsavel,
      navigationOptions: {
        title: 'Editar Responsavel',
      },
    },
    ListaFuncionario: {
      screen: ScreenListaFuncionario,
    },
    Editafuncionario: {
      screen: ScreenEditarFuncionario,
      navigationOptions: {
        title: 'Editar Funcionario',
      },
    },
    ListaVeiculo: {
      screen: ScreenListaVeiculo,
    },
    EditaVeiculo: {
      screen: ScreenEditarVeiculo,
      navigationOptions: {
        title: 'Editar Veiculo',
      },
    },
    Mapa: {
      screen: ScreenResponsavel,
      navigationOptions: {
        title: 'Mapa',
      },
    },

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

    InitialRouteName: 'LoginResponsavel',
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#000',
      // headerShown: true,
      headerBackTitle: ' ',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
