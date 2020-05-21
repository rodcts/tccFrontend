import React, { Component, useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Item,
  RefreshControl,
} from 'react-native';
import { ListItem, Icon, Avatar } from 'react-native-elements';
import api from '../../services/api';
import styles from './style';
import { TextInput, Button } from 'react-native-paper';
import { Right } from 'native-base';

export default class CadastrarRotaTransporte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objData: [],
      arrayAluno: [],
      load: false,
      loading: false,
      nome: this.props.navigation.state.params.nome,
      matriculaTransportador: this.props.navigation.state.params
        .matriculaTransportador,
      matricula: '',
    };
  }

  // TODO
  

  handleLista = async (matricula) => {
    try {
      const { arrayAluno, objData } = this.state;
      let response = await api.buscarAluno(matricula);
      console.log('RESPONSE', response.data._id);

      if (response.data._id == undefined) {
        alert('Matricula Não Encontrada!!');

      }

      let resp = response.data[0];

      if (resp) {
        arrayAluno.push(resp);
        console.log(arrayAluno);
        this.setState(
          {
            arrayAluno,
          },
          function () {
            if (objData != null || objData != [] || objData != '') {
              let value = objData.push(resp);
              console.log('FAZENDO PUSH', value);
            }
          },
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  //TODO tirar aluno da lista de transporte atual
  handleApagar = (params) => {
    Alert.alert('ATENÇÃO! ', 'Você está tirando o aluno da lista de viagem', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Pressionando o botao cancelar'),
      },
      {
        text: 'OK',
        onPress: () => {
          const { arrayAluno, load } = this.state;

          arrayAluno.map((e) => {
            let index = e.matricula.indexOf(params);

            if (index > -1) {
              arrayAluno.splice(index, 1);

              this.setState({ load: true });
            }
          });
        },
      },
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
              <Text>{this.state.matriculaTransportador}</Text>
            </View>
          </View>
          <View>
            <TextInput
              placeholder="Digite Matricula"
              placeholderColor="#c4c3cb"
              style={{
                height: 30,
                fontSize: 14,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#eaeaea',
                backgroundColor: '#fafafa',
                margin: 15,
                padding: 5,
              }}
              onChangeText={(matricula) => this.setState({ matricula })}
              value={this.state.matricula}
            />
            <View>
              <Button
                onPress={() => this.handleLista(this.state.matricula)}
                icon="account-arrow-right-outline"
                mode="text">
                Inserir Aluno
              </Button>
            </View>
          </View>
          <FlatList
            keyExtractor={(item) => item._id}
            data={this.state.objData}
            renderItem={({ item }) => (
              <ListItem
                style={{
                  height: 75,
                  padding: 10,
                  opacity: 0.7,
                }}
                title={item.nome}
                subtitle={item.matricula}
                bottomDivider
                leftIcon={
                  <Avatar
                    rounded
                    showEditButton={true}
                    onPress={() => console.log('testando')}
                  />
                }
                rightIcon={
                  <Icon
                    name="trash"
                    type="font-awesome"
                    onPress={() => this.handleApagar(item.matricula)}
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
