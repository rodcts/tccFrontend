import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Image } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

import styles from './style';
import logo from '../../../img/iconLogin/login-admin.jpg';
import api from '../../../services/api';

export default class Resp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      cpf: '',
      nome: '',
    };
  }
  componentDidMount() {}

  componentWillUnmount() {}

  async handleLogin(res) {
    try {
      let data = {
        email: this.state.email,
        cpf: this.state.cpf,
        nome: '',
      };

      const res = await api.authAdmin(data);

      this.setState({ nome: res.data.autenticacao.nome });

      console.info('passagem de parametro ===>', this.state.nome);

      switch (res.status) {
        case 200:
          await this.props.navigation.navigate('Administrador', {
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
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              placeholder="CPF"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
              onChangeText={cpf => this.setState({ cpf })}
              value={this.state.cpf}
            />
          </View>
          <View style={styles.loginViewButton}>
            <Button
              style={styles.loginButton}
              icon="login"
              mode="contained"
              onPress={() => this.handleLogin()}
              title="Login">
              Login
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
