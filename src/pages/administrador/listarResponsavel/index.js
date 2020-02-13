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
  ActivityIndicator,
} from 'react-native';

import api from '../../../services/api';
import styles from './style'
import iconUpdate from '../../../img/iconPlus/iconPlus2.png';

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
    headerRight: (
      <View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')} //TODO criar o metodo que chame o componente de inserir um novo responsavel
        >
          <Image
            style={{width: 30, height: 30, marginRight: 29, borderRadius: 30}}
            source={iconUpdate}></Image>
        </TouchableOpacity>
      </View>
    ),
    headerStyle: {
      backgroundColor: '#FFFFFF',
    },
    headerBackTitle: null,
    headerTintColor: '#000',
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
      responseJson = JSON.stringify(response);
      responseObj = JSON.parse(responseJson);

      this.setState(
        {
          data: responseObj,
          loading: false,
        },
        function() {},
      );
    } catch (error) {
      return error;
    }
  };

  _insertResponsavel() {
    try {
      e = 'EditarResponsavel';
      const {navigate} = this.props.navigation;

      navigate(e);
    } catch (err) {
      console.info('Erro handleNewResponsavel' + err);
    }
  }

  _handleChangeText = text => {
    this.setState({dtNome: text});
  };

  handleDeletando = async id => {
    try {
      let response = await api.deletaResponsavel(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  handleExcluir = _id => {
    console.log('deleta responsavel  ', _id);

    Alert.alert('ATENÇÃO! ', 'A Exclusão será permanente', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      {text: 'OK', onPress: () => this.handleDeletando(_id)},
    ]);
  };

  render() {
    if (this.state.loading) {
      return (
        <View
          style={{
            marginTop: 150,
            alignItem: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" color="#5DBCD2" />
        </View>
      );
    } else {
      return (
        <View>
          <FlatList
            keyExtractor={item => item._id}
            data={this.state.data}
            renderItem={({item}) => (
              <View style={{margin: 15, padding: 15, borderBottomWidth: 1}}>
                <TextInput
                  style={{color: '#000000'}}
                  onChangeText={text => this._handleChangeText(text)}
                  value={item.nome}
                />
                <TextInput
                  style={{color: '#000000'}}
                  onChangeText={text => this._handleChangeText(text)}
                  value={item.cpf}
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
                      this.props.navigation.navigate('EditaResponsavel', {
                        _id: item._id,
                        nome: item.nome,
                        cpf: item.cpf,
                      })
                    }>
                    <Image
                      style={{width: 30, height: 30, borderRadius: 30}}
                      source={require('../../../img/iconListar/editar.png')}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.handleExcluir(item._id)}>
                    <Image
                      style={{width: 30, height: 30, borderRadius: 30}}
                      source={require('../../../img/iconListar/excluir.png')}
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