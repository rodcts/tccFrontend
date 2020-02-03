import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ScreenChangeLogin from './pages/changeLogin/index';
import ScreenAdministrador from './pages/administrador/index';
import ScreenListaResponsavel from './pages/administrador/listar/index';
import ScreenEditarResponsavel from './pages/administrador/editar/index';
import ScreenResponsavel from './pages/responsavel/index';
import ScreenLoginResponsavel from './pages/login/responsavel/index';
import ScreenLoginAdministrador from './pages/login/administrador/index';
import ScreenLoginTransportador from './pages/login/transportador/index';

const AppNavigator = createStackNavigator(
  {
    ChangeLogin: {
      screen: ScreenChangeLogin,
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
    EditarResponsavel: {
      screen: ScreenEditarResponsavel,
      navigationOptions: {
        title: 'Editar Responsavel',
      },
    },
    Mapa: {
      screen: ScreenResponsavel,
      navigationOptions: {
        title: 'Mapa',
      },
    },
    LoginResponsavel: {
      screen: ScreenLoginResponsavel,
      navigationOptions: {
        title: 'Login Responsavel',
      },
    },
    LoginAdministrador: {
      screen: ScreenLoginAdministrador,
      navigationOptions: {
        title: 'Login Administrador',
      },
    },
    LoginTransportador: {
      screen: ScreenLoginTransportador,
      navigationOptions: {
        title: 'Login Transportador',
      },
    },

    InitialRouteName: 'ChangeLogin',
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
