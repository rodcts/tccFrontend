import React, { Component } from 'react';
import { View, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import { Button } from 'galio-framework';
import styles from './style';
import logo from '../../../img/iconLogin/iconLogin1.png';
import api from '../../../services/api';

export default class Transportador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      cpf: '',
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  async onLoginPress() {
    try {
      let data = {
        email: this.state.email,
        cpf: this.state.cpf,
        nome: '',
      };

      console.info('====>', data);

      //TODO metodo para validar o transportador
      let res = await api.authFuncionario(data);

      this.setState({ nome: res.data.autenticacao.nome });
      console.info('passagem de parametro ===>', this.state.nome);

      switch (res.status) {
        case 200:
          if (res.data.autenticacao.cargo === 'Transportador') {
            await this.props.navigation.navigate('Transporte', {
              nome: this.state.nome,
            });
          } else {
            alert('Você não está apto a logar aqui!');
          }
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
        style={styles.containerView}
        enabled>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Image style={styles.logo} source={logo} />
            {/* <Text style={styles.logoText}></Text> */}
            <TextInput
              placeholder="Email"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              autoCapitalize="none"
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
              onPress={() => this.onLoginPress()}
              title="Login">
              Login
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
