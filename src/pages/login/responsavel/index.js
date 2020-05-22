import React, { Component } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
} from 'react-native';
// import { Text } from 'galio-framework';
import { Button, Text, TextInput } from 'react-native-paper';

import api from '../../../services/api';
import styles from './style';
import logo from '../../../img/iconLogin/login-responsavel.png';

export default class Resp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      cpf: '',
      user: '',
      nome: '',
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  async onLoginPress() {
    try {
      let data = {
        email: this.state.email,
        cpf: this.state.cpf,
      };

      console.info('====>', data);

      let res = await api.authResponsavel(data);

      console.info('====> ', res.data.autenticacao.nome);

      this.setState({ nome: res.data.autenticacao.nome });
      console.info('===>', this.state.nome);

      switch (res.status) {
        case 200:
          await this.props.navigation.navigate('MapaTransporte', {
            nome: this.state.nome,
          });
          break;

        case 400:
          console.info(`Erro ${res.status}`);
          break;

        case 401:
          console.info(`Erro ${res.status}`);
          break;

        case 404:
          console.info(`Erro ${res.status}`);
          break;

        case 500:
          console.info(`Erro ${res.status}`);
          break;

        default:
          console.info(`Erro ${res.status}`);
          break;
      }
    } catch (err) {
      console.info(err);
    }
  }

  async handleChangeUser(user) {
    try {
      console.info(user);

      switch (user) {
        case 'administrador':
          await this.props.navigation.navigate('LoginAdministrador');

          break;
        case 'funcionario':
          await this.props.navigation.navigate('LoginTransportador');

          break;

        default:
          console.info('Tipo de usuario desconhecido');
          break;
      }
    } catch (error) {}
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.containerView}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Image style={styles.logo} source={logo} />
            {/* <Text style={styles.logoText}></Text> */}
            <TextInput
              placeholder="Email"
              placeholderColor="#c4c3cb"
              autoCapitalize="none"
              style={styles.loginFormTextInput}
              onChangeText={(email) => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              placeholder="CPF"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
              onChangeText={(cpf) => this.setState({ cpf })}
              value={this.state.cpf}
            />
          </View>
          <View style={styles.loginViewButton}>
            <Button
              icon="login"
              mode="contained"
              style={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Login">
              Login
            </Button>
          </View>

          <View style={styles.containerChangeUser}>
            <View style={{ flexDirection: 'row' }}>
              <Button
                icon="account-tie"
                mode="text"
                style={styles.containerChangeUserbtn}
                onPress={() => this.handleChangeUser('administrador')}>
                <Text style={styles.logoTextUser}>ADMINISTRADOR</Text>
              </Button>
              <Button
                icon="bus"
                mode="text"
                style={styles.containerChangeUserbtn}
                onPress={() => this.handleChangeUser('funcionario')}>
                <Text style={styles.logoTextUser}>TRANSPORTADOR</Text>
              </Button>
            </View>
        <ImageBackground
          source={require('../../../img/template/bg2.png')}
          style={styles.backgroundImage}></ImageBackground>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
