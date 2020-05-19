import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import {
  TextInput,
  Subheading,
  IconButton,
  Colors,
  ActivityIndicator,
} from 'react-native-paper';

import { FlatList } from 'react-native-gesture-handler';
import api from '../../../../services/api';
import styles from './style';

export default class EditarResponsavel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      id: this.props.navigation.state.params.dataParse._id,
      placa: this.props.navigation.state.params.dataParse.placa,
      ano: this.props.navigation.state.params.dataParse.ano,
      modelo: this.props.navigation.state.params.dataParse.modelo,
      categoria: this.props.navigation.state.params.dataParse.categoria,
      cpfFuncionario: this.props.navigation.state.params.dataParse
        ._cpfFuncionario,
      funcionario: this.props.navigation.state.params.dataParse._funcionario,
      status: this.props.navigation.state.params.dataParse.status,
      loading: true,
    };

    this.findVeiculo = this.findVeiculo.bind(this);
  }

  static navigationOptions = () => {
    return {
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerBackTitle: null,
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  // //TODO criar metodo que vai chamar a rota de atualização
  async findVeiculo() {
    try {
      const { placa } = this.state;
      let response = await api.buscarVeiculo(placa);

      this.setState(
        {
          data: response,
          loading: false,
        },
        function() {},
      );
    } catch (error) {
      return error;
    }
  }

  componentDidMount() {
    this.findVeiculo();
  }

  async handleDeletar() {
    try {
      Alert.alert('ATENÇÃO! ', 'A Exclusão será permanente', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        { text: 'OK', onPress: () => this.handleDeletando(this.state.id) },
      ]);
    } catch (error) {
      console.info('Erro na exlusao!');
    }
  }

  async handleDeletando(id) {
    try {
      let response = await api.deletaVeiculo(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async handleUpdate() {
    try {
      const {
        data,
        cpfFuncionario,
        funcionario,
        status,
        modelo,
        ano,
        categoria,
        placa,
      } = this.state;

      let id = data.data[0]._id;

      let resp = await api.atualizarResponsavel(id, {
        funcionario: funcionario,
        cpfFuncionario: cpfFuncionario,
        status: status,
        modelo: modelo,
        ano: ano,
        categoria: categoria,
        placa: placa,      
      });

      if (resp.status === 200) {
        alert('Atualizado com sucesso');
      } else console.info('Erro na atualização');
    } catch (error) {}
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.load}>
          <ActivityIndicator
            animating={true}
            size="large"
            color={Colors.red800}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.flatlist}>
            <FlatList
              keyExtractor={item => item._id}
              data={this.state.data.data}
              renderItem={({ item }) => (
                <View>
                  <View style={styles.fatlistcontainer}>
                    <Subheading style={styles.listtitle}>
                      DADOS FUNCIONARIO
                    </Subheading>

                    <TextInput
                      style={styles.listinputtext}
                      onChangeText={funcionario => this.setState({ funcionario })}
                      value={this.state.data.funcionario}
                      defaultValue={item.funcionario}
                      showSoftInputOnFocus={true}
                      label="Nome Completo"
                    />
                    <TextInput
                      style={styles.listinputtext}
                      label="CPF"
                      defaultValue={item.cpfFuncionario}
                      showSoftInputOnFocus={true}
                      disabled
                    />
                   
                  </View>
                  <Subheading style={styles.listtitle}>ENDEREÇO</Subheading>

                  <View>
                    <View>
                      {/* <TextInput
                        style={styles.listinputtext}
                        onChangeText={rua => this.setState({ rua })}
                        value={this.state.data.rua}
                        label="Logradouro"
                        defaultValue={item.endereco.rua}
                      /> */}
                     
                    </View>
                  </View>
                  <Subheading style={styles.listtitle}>DADOS ALUNO</Subheading>
                  <View>
                    
                  </View>
                </View>
              )}
            />
          </View>
          <View style={styles.btnfooter}>
            <IconButton
              icon="account-check"
              // color={Colors.red500}
              size={50}
              onPress={() => this.handleUpdate()}
            />
            <IconButton
              icon="delete-sweep"
              // color={Colors.red500}
              size={50}
              onPress={() => this.handleDeletar()}
            />
          </View>
        </View>
      );
    }
  }
}
