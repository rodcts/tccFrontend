import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ScreenMapa from '../pages/responsavel/index';

// const AppNavigator = createDrawerNavigator({
//   MapaTransporte: {
//     screen: ScreenMapa,
//     navigationOptions: {
//       title: 'Responsavel',
//     },
//   },
// });
const Routes = createAppContainer(
  createDrawerNavigator({
    MapaTransporte: {screen: ScreenMapa}
  },{
    initialRouteName: 'ScreenMapa'
  })
)

export default Routes;
