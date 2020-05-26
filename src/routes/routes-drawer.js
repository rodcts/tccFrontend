import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { IconButton } from 'react-native-paper';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import ScreenMapa from '../pages/responsavel/index';

const AppNavigator = createDrawerNavigator({
  Home: {
    screen: ScreenMapa,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
  Mapa1: {
    screen: ScreenMapa,
    navigationOptions: {
      drawerLabel: 'Perfil',
    },
  },

  Mapa2: {
    screen: ScreenMapa,
    navigationOptions: {
      drawerLabel: 'Configuração',
    },
  },
  Mapa3: {
    screen: ScreenMapa,
    navigationOptions: {
      drawerLabel: 'Ajuda',
    },
  },
});

export default createAppContainer(AppNavigator);
