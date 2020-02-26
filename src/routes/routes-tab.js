import React, {Component} from 'react';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {Icon} from 'react-native-elements';

//TODO importar as telas
import ScreenListaResponsavel from '../pages/administrador/listar/listarResponsavel';
import ScreenListaAluno from '../pages/administrador/listar/listarAluno';
import ScreenListaFuncionario from '../pages/administrador/listar/listarFuncionario';
import ScreenListaVeiculo from '../pages/administrador/listar/listarVeiculo';

const AppNavigator = createBottomTabNavigator(
  {
    ResponsavelLista: {screen: ScreenListaResponsavel},
    AlunoLista: {screen: ScreenListaAluno},
    FuncionarioLista: {screen: ScreenListaFuncionario},
    VeiculoLista: {screen: ScreenListaVeiculo},
  },
  {
    initialRouteName: 'ResponsavelLista',

    tabBarOptions: {
      showLabel: true,
      activeTintColor: '#000',
      style: {
        backgroundColor: '#fff',
      },
    },

    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;

        if (focused && routeName === 'ResponsavelLista') {
          return <Icon name="users" type="font-awesome" />;
        }

        if (focused && routeName === 'AlunoLista') {
          return <Icon name="child" type="font-awesome"  />;
        }
        if (focused && routeName === 'FuncionarioLista') {
          return <Icon name="briefcase" type="font-awesome" />;
        }
        if (focused && routeName === 'VeiculoLista') {
          return <Icon name="bus" type="font-awesome"  />;
        }
      },
    }),
  },
);
// const AppNavigator = createMaterialBottomTabNavigator(
//   {
//     ResponsavelLista: {
//       screen: ScreenListaResponsavel,
//       navigationOptions: {
//         // tabBarOptions: {
//         //   title: 'Responsavel',
//         //   activeTintColor: '#FFF',
//         //   labelStyle: {fontSize: 10},
//         //   showIcon: true,
//         // },
//         navigationOptions: {
//           tabBarOptions: {
//             activeTintColor: '#FFF',
//             labelStyle: {fontSize: 10},
//             showIcon: true,
//             tabBarLabel: 'Responsavel',
//             tabBarIcon: () => (
//               <View>
//                 <Icon name="child" type="font-awesome" color="#000000" />
//               </View>
//             ),
//           },
//         },
//       },
//     },
//     AlunoLista: {
//       screen: ScreenListaAluno,
//       navigationOptions: {
//         tabBarOptions: {
//           title: 'Aluno',
//           activeTintColor: '#FFF',
//           labelStyle: {fontSize: 10},
//           showIcon: true,
//         },
//       },
//     },
//     FuncionarioLista: {
//       screen: ScreenListaFuncionario,
//       navigationOptions: {
//         tabBarOptions: {
//           title: 'Funcionario',
//           activeTintColor: '#FFF',
//           labelStyle: {fontSize: 10},
//           showIcon: true,
//         },
//       },
//     },
//     VeiculoLista: {
//       screen: ScreenListaVeiculo,
//       navigationOptions: {
//         tabBarOptions: {
//           title: 'Veiculo',
//           activeTintColor: '#FFF',
//           labelStyle: {fontSize: 10},
//           showIcon: true,
//         },
//       },
//     },
//     InitialRouteName: 'ResponsavelLista',
//   },
// {
//   activeColor: '#f0edf6',
//   inactiveColor: '#226557',
//   labeled: true,
//   barStyle: {backgroundColor: '#3BAD87'},
//   shifting: true,
// },
// );

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
// /////
// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// //TODO importar as telas
// import ResponsavelLista from '../pages/administrador/listar/listarResponsavel';
// import AlunoLista from '../pages/administrador/listar/listarAluno';
// import FuncionarioLista from '../pages/administrador/listar/listarFuncionario';
// import VeiculoLista from '../pages/administrador/listar/listarVeiculo';
// import {View, Text, Footer} from 'native-base';
// import {Icon} from 'react-native-elements';
// import {Component} from 'react';

// const Tab = createMaterialBottomTabNavigator();

// export default class tabsAdmin extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const {params} = this.props.navigation.state;
//     console.info('=======>', params.nome);
//     return (
//       <NavigationContainer>
//         <Tab.Navigator
//           tabBarOptions={{
//             activeTintColor: '#FFF',
//             labelStyle: {fontSize: 10},
//             // style: {backgroundColor: '#000000'},
//             showIcon: true,
//           }}>
//           <Tab.Screen
//             name="Responsavel"
//             component={ResponsavelLista}
//             myProp={params.nome}
//             options={{
//               tabBarLabel: 'Responsavel',
//               tabBarIcon: () => (
//                 <View>
//                   <Icon name="users" type="font-awesome" color="#000000" />
//                 </View>
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Aluno"
//             component={AlunoLista}
//             options={{
//               tabBarLabel: 'Aluno',
//               tabBarIcon: () => (
//                 <View>
//                   <Icon name="child" type="font-awesome" color="#000000" />
//                 </View>
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Funcionario"
//             component={FuncionarioLista}
//             options={{
//               tabBarLabel: 'Funcionario',
//               tabBarIcon: () => (
//                 <View>
//                   <Icon name="id-badge" type="font-awesome" color="#000000" />
//                 </View>
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Veiculo"
//             component={VeiculoLista}
//             options={{
//               tabBarLabel: 'Veiculo',
//               tabBarIcon: () => (
//                 <View>
//                   <Icon name="bus" type="font-awesome" color="#000000" />
//                 </View>
//               ),
//             }}
//           />
//         </Tab.Navigator>
//       </NavigationContainer>
//     );
//   }
// }
