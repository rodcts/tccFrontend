import React, {Component} from 'react';
import {
  View,
  Button,
  KeyboardAvoidingView,
  TextInput,
  Image,
} from 'react-native';
import styles from './style';
import logo from '../../../img/iconLogin/login-admin.jpeg';
import api from '../../../services/api';

export default class Resp extends Component {
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
    //  await this.props.navigation.navigate('ListaResponsavel');

    try {
      let data = {
        email: this.state.email,
        cpf: this.state.cpf,
      };

      console.info('====>', data);

      let res = await api.authAdmin(data);

      console.info('====> ', res);

      if (res.data.autenticacao.cargo === 'administrador') {
        await handleLogin(res);
      } else {
        alert(`Você não é um administrador!`);
      }
    } catch (err) {
      console.info(err);
    }
  }

  async handleLogin(res) {
    try {
      switch (res.status) {
        case 200:
          await this.props.navigation.navigate('ListaResponsavel');
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
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Image style={styles.logo} source={logo} />
            {/* <Text style={styles.logoText}></Text> */}
            <TextInput
              placeholder="Email"
              placeholderColor="#c4c3cb"
              autoCapitalize="none"
              style={styles.loginFormTextInput}
              onChangeText={email => this.setState({email})}
              value={this.state.email}
            />
            <TextInput
              placeholder="CPF"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
              onChangeText={cpf => this.setState({cpf})}
              value={this.state.cpf}
            />
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Login"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
