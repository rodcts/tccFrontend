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

// import React from 'react';
// import {
//   ImageBackground,
//   Image,
//   StyleSheet,
//   StatusBar,
//   Dimensions,
//   Platform,
// } from 'react-native';
// import {Block, Button, Text, theme} from 'galio-framework';
// import {Svg, Defs, LinearGradient, Stop, Rect} from 'react-native-svg';
// import LinearGradient from 'react-native-linear-gradient';
// import { LinearGradient } from 'expo-linear-gradient';

// const {height, width} = Dimensions.get('screen');
// import {Images, materialTheme} from '../../../constants/';
// import {HeaderHeight} from '../../../constants/utils';

// export default class Pro extends React.Component {
//   render() {
//     const {navigation} = this.props;

//     return (
//       <Block flex style={styles.container}>
//         <StatusBar barStyle="light-content" />
//         <Block flex>
//  <ImageBackground
//   source={{uri: Images.Pro}}
//   style={{height: height / 1.8, width, zIndex: 1}}>
//   <LinearGradient
//     style={styles.gradient}
//     colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
//   />
// </ImageBackground>
//           <Block space="between" style={styles.padded}>
//             <Block>
//               <Block>
//                 <Block>
//                   <Text color="white" size={60}>
//                     Unlock
//                   </Text>
//                 </Block>
//                 <Block>
//                   <Text color="white" size={60}>
//                     Material
//                   </Text>
//                 </Block>
//                 <Block row>
//                   <Text color="white" size={60}>
//                     Kit
//                   </Text>
//                   {/* <Block middle style={styles.pro}>
//                     <Text size={16} color="white">
//                       PRO
//                     </Text>
//                   </Block> */}
//                 </Block>
//               </Block>
//               <Text size={16} color="rgba(255,255,255,0.6)">
//                 Take advantage of all the features and screens made upon Galio
//                 Design System, coded on React Native for both.
//               </Text>
//               {/* <Block
//                 row
//                 style={{
//                   marginTop: theme.SIZES.BASE * 1.5,
//                   marginBottom: theme.SIZES.BASE * 4,
//                 }}>
//                 <Image
//                   source={require('../../../assets/images/ios.png')}
//                   style={{
//                     height: 38,
//                     width: 82,
//                     marginRight: theme.SIZES.BASE * 1.5,
//                   }}
//                 />
//                 <Image
//                   source={require('../../../assets/images/android.png')}
//                   style={{height: 38, width: 140}}
//                 />
//               </Block> */}
//               <Button
//                 shadowless
//                 style={styles.button}
//                 color={materialTheme.COLORS.BUTTON_COLOR}
//                 onPress={() => navigation.navigate('Home')}>
//                 GET PRO VERSION
//               </Button>
//             </Block>
//           </Block>
//         </Block>
//       </Block>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: theme.COLORS.BLACK,
//     marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
//   },
//   padded: {
//     paddingHorizontal: theme.SIZES.BASE * 2,
//     zIndex: 3,
//     position: 'absolute',
//     bottom:
//       Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3,
//   },
//   button: {
//     width: width - theme.SIZES.BASE * 4,
//     height: theme.SIZES.BASE * 3,
//     shadowRadius: 0,
//     shadowOpacity: 0,
//   },
//   pro: {
//     backgroundColor: materialTheme.COLORS.LABEL,
//     paddingHorizontal: 8,
//     marginLeft: 12,
//     borderRadius: 2,
//     height: 22,
//   },
//   gradient: {
//     zIndex: 1,
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     height: 66,
//   },
// });
