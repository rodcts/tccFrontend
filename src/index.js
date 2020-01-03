import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './components/home';
import ListaResponsavel from './components/responsavel/listar';
import EditarResponsavel from './components/responsavel/editar';
import ScreenResponsavel from './components/responsavel/mapa';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  ListaResponsavel: {
    screen: ListaResponsavel,
  },
  EditarResponsavel: {
    screen: EditarResponsavel,
  },
  ScreenResponsavel: {
    screen: ScreenResponsavel,
  },

  InitialRouteName: 'Home',
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
