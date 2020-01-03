import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  List,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  Image,
  ActivityIndicator
} from 'react-native';

import api from '../../../services/api';

export default class ListaResponsavel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };

    this._handleLista = this._handleLista.bind(this);
  }
  static navigationOptions = {
    // title: 'Lista',
    headerStyle: {
      backgroundColor: '#5DBCD2',
    },
    headerBackTitle: null,
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  componentDidMount() {
    this._handleLista();
  }

  _handleLista = async () => {
    try {
      let response = await api.listaResponsavel();

      let res = this.setState(
        {
          data: response,
          loading: false
        },
        function() {},
      );
      
      return res;
    } catch (error) {
      return error;
    }
  };

  _handleChangeText = text => {
    this.setState({dtNome: text});
  };

  handleExcluir() {
    Alert.alert('ATENÇÃO! ', 'A Exclusão será permanente', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={{alignItem: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else {
      return (
        <View>
          <FlatList
            keyExtractor={item => item._id}
            data={this.state.data}
            renderItem={({item}) => (
              <View style={{margin: 15, padding: 15}}>
                <TextInput
                  style={{color: '#000000'}}
                  onChangeText={text => this._handleChangeText(text)}
                  value={item.nome}
                />
                <TextInput
                  style={{color: '#000000'}}
                  onChangeText={text => this._handleChangeText(text)}
                  value={item.email}
                />
                <View
                  style={{
                    flexDirection: 'row-reverse',
                    marginTop: -34,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate(
                        'EditarResponsavel',
                        this.state.data,
                      )
                    }>
                    <Image
                      style={{width: 30, height: 30}}
                      source={require('../../../imagem/iconListar/editar.png')}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={this.handleExcluir}>
                    <Image
                      style={{width: 30, height: 30}}
                      source={require('../../../imagem/iconListar/excluir.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      );
    }
  }
}
