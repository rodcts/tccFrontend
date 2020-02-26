import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ScreenMapa from '../pages/responsavel/index';

const AppNavigator = createDrawerNavigator({
  Maaapa: {
    screen: ScreenMapa,
    navigationOptions: {
      title: 'Responsavel',
    },
    initialRouter: 'Maaapa',
  },
});
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
