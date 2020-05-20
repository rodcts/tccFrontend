import React from 'react';
import { View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import ScreenAddAlunoTransporte from '../pages/transportador/index';
import ScreenAtivarVeiculo from '../pages/transportador/ativarVeiculo';


const TabNavigator = createMaterialBottomTabNavigator(
  {
    AlunoTransporte: {
      screen: ScreenAddAlunoTransporte,
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
    AtivarVeiculo: {
      screen: ScreenAtivarVeiculo,
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
        inactiveColor: '#92c5c2',
        barStyle: { backgroundColor: '#2c6d6a' },
      },
    },
  },
  {
    initialRouteName: 'AlunoTransporte',
    activeColor: '#ffffff',
    inactiveColor: '#92c5c2',
    barStyle: { backgroundColor: '#2c6d6a' },
  },
);

export default createAppContainer(TabNavigator);
