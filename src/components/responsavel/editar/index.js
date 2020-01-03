import React, {Component} from 'react';
import {View, Text, Button, TextInput, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class EditarResponsavel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      name: 'Rodrigo',
      email: '@mail.com',
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('data'),

      headerStyle: {
        backgroundColor: '#5DBCD2',
      },
      headerBackTitle: null,
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  render() {
    return (
      <View> 
        <View
          style={{
              marginLeft: 20,
              marginRight: 20,
              marginTop: 30,
              paddingTop: 20,
              paddingBottom: 40,
              backgroundColor: '#F0F8FF',
              borderRadius: 15
          }}>
          <View style={{margin: 20}}>
            <View style={{flexDirection: 'row'}}>
              <TextInput onChangeText={text => this.setState({text})}>
                {this.props.navigation.state.params.nome}
              </TextInput>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TextInput onChangeText={text => this.setState({text})}>
                {this.props.navigation.state.params._id}
              </TextInput>
              <TextInput onChangeText={text => this.setState({text})}>
                {this.props.navigation.state.params.telefone}
              </TextInput>
            </View>

            <View style={{flexDirection: 'row'}}>
              <TextInput
                onChangeText={text => this.setState({text})}
                value={this.state.name}></TextInput>
              <TextInput
                onChangeText={text => this.setState({text})}
                value={this.state.email}></TextInput>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              marginRight: 20,
            }}>
            <TouchableOpacity>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../../imagem/iconSalvar/salvar.png')}></Image>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginLeft: 20,
            }}>
            <TouchableOpacity>
              <Image
                style={{width: 30, height: 30}}
                source={require('../../../imagem/iconCancelar/cancelar.png')}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
