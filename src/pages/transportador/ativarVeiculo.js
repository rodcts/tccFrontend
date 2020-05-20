import React, { Component, useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, Icon, Avatar } from 'react-native-elements';
import api from '../../services/api';
import styles from './style';
import { TextInput, Button } from 'react-native-paper';
import { Right } from 'native-base';

export default class AtivarVeiculo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objData: [],
      load: false,
      loading: false,
      nome: this.props.navigation.state.params.nome,
      novoStatus: false,
      objVeiculo: [],
    };
  }

  // TODO listar somente veiculos disponiveis para ativar a rota
  handleLista = async () => {
    try {
      const { objData, objVeiculo } = this.state;

      this.setState({ objVeiculo: [] }); // Reseta a variavel
      let response = await api.listaVeiculo();

      response.map(e => {
        if (e.status == 'false') {
          objVeiculo.push(e);
          this.setState({ objData: objVeiculo });
        }
      });
    } catch (error) {
      console.log('ERROR handleLista :: ', error);
    }
  };

  //TODO tirar aluno da lista de transporte atual
  handleAtivarVeiculo = async id => {
    try {
      const updateStatus = await api.atualizarVeiculo(id, {
        status: true,
      });

      console.log('updateStatus :: ', updateStatus);
    } catch (err) {
      console.error('handleAtivarVeiculo', err);
    }
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
          </View>
          <View>
            <Button
              onPress={() => this.handleLista(this.state.placa)}
              title="ADD Veiculo">
              Listar Veiculos Disponiveis
            </Button>
          </View>
          <FlatList
            keyExtractor={item => item._id}
            data={this.state.objData}
            renderItem={({ item }) => (
              <ListItem
                style={{
                  height: 75,
                  padding: 10,
                  opacity: 0.7,
                }}
                title={item.nome}
                subtitle={item.placa}
                bottomDivider
                leftIcon={
                  <Avatar
                    rounded
                    showEditButton={true}
                    // TODO criar metodo para mostrar descricao do veiculo e o motorista associado.
                    onPress={() => console.log('testando')}
                  />
                }
                rightIcon={
                  <Icon
                    name="podcast"
                    type="font-awesome"
                    onPress={() => this.handleAtivarVeiculo(item._id)}
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
