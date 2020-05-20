import React, { Component } from 'react';
import { View, Text, FlatList, Alert, ActivityIndicator } from 'react-native';
import { ListItem, Icon, Avatar } from 'react-native-elements';
import { Right } from 'native-base';

import api from '../../../../services/api';

export default class ListaAluno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      fetching: true,
      dataEdit: [],
      nome: this.props.navigation.state.params.nome,
    };
    this._handleLista = this._handleLista.bind(this);
  }

  onRefresh() {
    this.setState({ fetching: true });
    this._handleLista();
  }

  componentDidMount() {
    this._handleLista();
  }

  handleAdd = () => {
    this.props.navigation.navigate('AddAluno');
  };

  _handleLista = async () => {
    try {
      let response = await api.listaAluno();

      this.setState(
        {
          data: response,
          loading: false,
          fetching: false,
        },
        function() {},
      );
    } catch (error) {
      return error;
    }
  };

  _handleChangeText = text => {
    this.setState({ dtNome: text });
  };

  handleDeletando = async id => {
    try {
      console.log('=============>>> ', id);
      let response = await api.deletaAluno(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  handleExcluir = _id => {
    Alert.alert('ATENÇÃO! ', `A Exclusão do será permanente`, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },
      { text: 'OK', onPress: () => this.handleDeletando(_id) },
    ]);
  };

  handleEdit() {
    try {
      Alert.alert('ATENÇÃO! ', `Não é possivel editar o aluno`, { text: 'OK' });
    } catch (error) {
      console.info('handleEdit  ====>', error);
    }
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
        <View
          style={{
            flex: 1,
          }}>
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
            <View style={{ paddingTop: 60, paddingLeft: 20, width: 150 }}>
              <Text>{this.state.nome}</Text>
            </View>
            <Right style={{ paddingRight: 25 }}>
              <Icon
                name="plus-circle"
                type="font-awesome"
                size={30}
                onPress={() => this.handleAdd()} //TODO adicionar metodo para adicionar funcionario
              />
              <Text>ADD</Text>
            </Right>
          </View>
          <FlatList
            onRefresh={() => this.onRefresh()}
            refreshing={this.state.fetching}
            keyExtractor={item => item._id}
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
                style={{ height: 75, padding: 10, opacity: 0.7 }}
                title={item.nome}
                subtitle={item.matricula}
                bottomDivider
                // TODO criar metodo para navegar para a tela de editar
                leftIcon={
                  <Avatar
                    rounded
                    showEditButton={true}
                    onPress={() => this.handleEdit()}
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
        </View>
      );
    }
  }
}
export { ListaAluno };
