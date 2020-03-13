import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  Image,
  ActivityIndicator,
  SafeAreaView,
  SearchBar,
  Modal,
} from 'react-native';
import {ListItem, Icon, Avatar} from 'react-native-elements';
import {List} from 'react-native-paper';

import api from '../../../../services/api';
import styles from './style';
import {Right} from 'native-base';

export default class ListaResponsavel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      nome: this.props.navigation.state.params.nome,
      dataEdit: [],
    };
    this._handleLista = this._handleLista.bind(this);
  }

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

  handleEdit = async id => {
    try {
      let res = await api.atualizarResponsavel(id);

      this.setState(
        {
          dataEdit: res,
          loading: false,
        },
        function() {},
      );

      await this.props.navigation.navigate('EditaResponsavel', {
        id: res.data._id,
        cpf: res.data.cpf,
        nome: res.data.nome,
        nome: res.data._aluno,
      });

      console.info('res dataEdit  ===>  ', this.state.dataEdit);
    } catch (error) {
      console.info('handleEdit  ====>', error);
    }
  };


  handleAdd =  () => {
    this.props.navigation.navigate('AddResponsavel');
  }

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
          {/* {<Header />} */}
          <View
            style={{
              margin: 20,
              paddingTop: 10,
              paddingBottom: 20,
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: '#A9A9A9',
            }}>
            <Avatar
              size="xlarge"
              rounded
              title="CR"
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
            />
            <View style={{paddingTop: 60, paddingLeft: 20, width: 150}}>
              <Text>{this.state.nome}</Text>
            </View>
            <Right style={{paddingRight: 25}}>
              <Icon
                name="plus-circle"
                type="font-awesome"
                size={30}
                onPress={() => this.handleAdd()} //TODO adicionar metodo para adicionar responsavel
              />
              <Text>ADD</Text>
            </Right>
          </View>

          <SafeAreaView>
            <FlatList
              keyExtractor={item => item._id}
              data={this.state.data}
              renderItem={({item}) => (
                <ListItem
                  style={{height: 75, padding: 10, opacity: 0.7}}
                  title={item.nome}
                  subtitle={item.email}
                  bottomDivider
                  // TODO criar metodo para navegar para a tela de editar
                  leftIcon={
                    <Avatar
                      rounded
                      showEditButton={true}
                      onPress={() => this.handleEdit(item._id)}
                    />
                  }
                  rightIcon={
                    <Icon
                      name="trash"
                      type="font-awesome"
                      onPress={() => this.handleExcluir(item._id)}
                    />
                  }
                />
              )}
            />
          </SafeAreaView>
        </View>
      );
    }
  }
}
