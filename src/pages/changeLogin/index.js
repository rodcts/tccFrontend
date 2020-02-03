import React, {Component} from 'react';
import {View, Picker, Text, ImageBackground} from 'react-native';

import styles from './style';

export default class ChangeLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
    };

    this.handlePage = this.handlePage.bind(this);
  }

  handlePage = (nameUsuario) => {
      
    const {navigate} = this.props.navigation;

    let {usuario} = this.state;
    usuario = nameUsuario;

    switch (usuario) {
      case 'responsavel':
        navigate('LoginResponsavel');
        break;

      case 'administrador':
        navigate('LoginAdministrador');
        break;

      case 'funcionario':
        navigate('LoginFuncionario');
        break;

      default:
        console.log('Informe um tipo de usuario para acessar!');
    }
  };

  render() {
    return (
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../img/iconApp/bg01.jpeg')}>
        <View style={styles.container}>
          <Text style={styles.text}>PARA ACESSAR</Text>
          <Text style={styles.text}>ESCOLHA UM TIPO DE USUARIO</Text>
          <Picker
            selectedValue={this.state.usuario}
            style={styles.picker}
            onValueChange={itemValue => this.setState({usuario: itemValue})}>
            <Picker.Item label="USUARIOS" value="USUARIOS" />
            <Picker.Item
              label="Responsavel"
              value="responsavel"
              onPress={this.handlePage(this.state.usuario)}
            />
            <Picker.Item
              label="Administrador"
              value="administrador"
              onPress={this.handlePage(this.state.usuario)}
            />
            <Picker.Item
              label="Funcionario"
              value="funcionario"
              onPress={this.handlePage(this.state.usuario)}
            />
          </Picker>
        </View>
      </ImageBackground>
    );
  }
}
