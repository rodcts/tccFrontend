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
      case 'listar':
        navigate('ListaResponsavel')
        break;
      case 'editar':
        navigate('EditaResponsavel')

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
          onPress={(value = 'listar') => this.handleAdmin(value)}>
          <Text>Listar</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={(value = 'editar') => this.handleAdmin(value)}>
          <Text>Editar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
