import React, {Component} from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Image,
  // StyleSheet,
  // StatusBar,
  // Dimensions,
  // Platform,
} from 'react-native';
import {Images, materialTheme} from '../../../constants/';
import {Block, Button, Text, theme} from 'galio-framework';
// import {Button} from 'react-native-elements';
import styles from './style';
import logo from '../../../img/iconLogin/login-responsavel.png';
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import api from '../../../services/api';

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

      this.setState({nome: res.data.autenticacao.nome})
      console.info('===>', this.state.nome)

      switch (res.status) {
        case 200:
          await this.props.navigation.navigate('Mapa', {nome: this.state.nome});
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
      <KeyboardAvoidingView style={styles.containerView} behavior="padding" enabled>
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
          </View>
          <View style={styles.loginViewButton}>
            <Button
              style={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Login">
              Login
            </Button>
          </View>

          <View style={styles.containerChangeUser}>
            <Text>Você é um? </Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.containerChangeUserbtn}
                onPress={() => this.handleChangeUser('administrador')}>
                <Text style={styles.logoTextUser}>ADMINISTRADOR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.containerChangeUserbtn}
                onPress={() => this.handleChangeUser('funcionario')}>
                <Text style={styles.logoTextUser}>FUNCIONARIO</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>        
      </KeyboardAvoidingView>
    );
  }
}