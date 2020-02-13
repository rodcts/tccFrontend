import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

// import styles from './style'

export default class ScreenAdministrador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    //
  }

  handleAdmin(switchAction) {
    const {navigate} = this.props.navigation;
    console.log(switchAction);
    switch (switchAction) {
      case 'listarResponsaveis':
        navigate('ListaResponsavel');

        break;
      case 'listarFuncionarios':
        navigate('ListaFuncionario');

        break;
      case 'listarVeiculos':
        navigate('ListaVeiculo');

        break;
      default:
        console.log('');
    }
  }
  render() {
    return (
      <View>
        <Text>TELA ADMINISTRADOR</Text>
        <TouchableHighlight
          onPress={(value = 'listarResponsaveis') => this.handleAdmin(value)}>
          <Text>Listar Responsaveis</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={(value = 'listarFuncionarios') => this.handleAdmin(value)}>
          <Text>Listar Funcionarios</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={(value = 'listarVeiculos') => this.handleAdmin(value)}>
          <Text>Listar Veiculos</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
