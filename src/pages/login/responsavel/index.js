import React, {Component} from 'react';
import {Text, View, Image, TextInput, KeyboardAvoidingView} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './style';
import logo from '../../../img/iconLogin/login-responsavel.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import api from '../../../services/api';

export default class Resp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      cpf: '',
      user: '',
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

      console.info('====> ', res);

      switch (res.status) {
        case 200:
          await this.props.navigation.navigate('Mapa');
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
          // direcionar para a pagina de administrador
          // alert('administrador');
          await this.props.navigation.navigate('LoginAdministrador');

          break;
        case 'funcionario':
          // direcionar para a pagina de funccionario
          // alert('funcionario');
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
            <View style={styles.containerChangeUser}>
              <Text>Você é um? </Text>
              <TouchableOpacity
                style={styles.containerChangeUserbtn}
                onPress={() => this.handleChangeUser('administrador')}>
                <Text style={styles.logoTextUser}>Administrador</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.containerChangeUserbtn}
                onPress={() => this.handleChangeUser('funcionario')}>
                <Text style={styles.logoTextUser}>Funcionaria</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
