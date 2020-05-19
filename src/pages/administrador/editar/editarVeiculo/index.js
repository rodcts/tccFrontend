import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import {
  TextInput,
  Subheading,
  IconButton,
  Colors,
  ActivityIndicator,
  Switch,
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

      // console.log('data dATA ', this.state.data.data[0]);
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
      const { data, cpfFuncionario, funcionario, status } = this.state;

      // console.log('dataaaaa', data.data[0]._id);

      let respFunc = await api.buscarFuncionario(cpfFuncionario);

      // console.log('respFunc', respFunc.data[0]._id);

      // atualizando
      let resp = await api.atualizarVeiculo(respFunc.data[0]._id, {
        _funcionario: respFunc.data[0],
        _cpfFuncionario: cpfFuncionario,
        id: data.data[0]._id,
        status: status,
      });
      // console.log('Status atualizado', resp);

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
                      DADOS VEICULO
                    </Subheading>
                    <TextInput
                      style={styles.listinputtext}
                      label="PLACA"
                      defaultValue={item.placa}
                      showSoftInputOnFocus={true}
                      disabled
                    />
                    <TextInput
                      style={styles.listinputtext}
                      label="FABRICANTE"
                      defaultValue={item.modelo}
                      showSoftInputOnFocus={true}
                      disabled
                    />
                    <TextInput
                      style={styles.listinputtext}
                      label="MODELO"
                      defaultValue={item.categoria}
                      showSoftInputOnFocus={true}
                      disabled
                    />
                    <TextInput
                      style={styles.listinputtext}
                      label="ANO FABRICAÇÃO"
                      defaultValue={item.ano}
                      showSoftInputOnFocus={true}
                      disabled
                    />
                    <Subheading style={styles.listtitle}>
                      STATUS VEICULO
                    </Subheading>
                    <TextInput
                      style={styles.listinputtext}
                      label="Status"
                      value={this.state.status}
                      onChangeText={status => this.setState({ status })}
                      showSoftInputOnFocus={true}
                      autoCapitalize="none"
                    />

                    <Subheading style={styles.listtitle}>
                      DADOS FUNCIONARIO RESPONSAVEL
                    </Subheading>

                    <TextInput
                      style={styles.listinputtext}
                      onChangeText={funcionario =>
                        this.setState({ 'funcionario.matricula': funcionario })
                      }
                      value={
                        this.state.data.data[0]._funcionario[0]
                          ? this.state.data.data[0]._funcionario[0].matricula
                          : null
                      }
                      showSoftInputOnFocus={true}
                      label="MATRICULA"
                      disabled
                    />

                    <TextInput
                      style={styles.listinputtext}
                      onChangeText={funcionario =>
                        this.setState({ 'funcionario.nome': funcionario })
                      }
                      value={
                        this.state.data.data[0]._funcionario[0]
                          ? this.state.data.data[0]._funcionario[0].nome
                          : null
                      }
                      showSoftInputOnFocus={true}
                      label="NOME COMPLETO"
                      disabled
                    />
                    <TextInput
                      style={styles.listinputtext}
                      onChangeText={cpfFuncionario =>
                        this.setState({ cpfFuncionario })
                      }
                      value={this.state.cpfFuncionario}
                      showSoftInputOnFocus={true}
                      label="CPF"
                    />

                    <TextInput
                      style={styles.listinputtext}
                      onChangeText={funcionario =>
                        this.setState({ 'funcionario.cnh': funcionario })
                      }
                      value={
                        this.state.data.data[0]._funcionario[0]
                          ? this.state.data.data[0]._funcionario[0].cnh
                          : null
                      }
                      showSoftInputOnFocus={true}
                      label="Carteira Nacional de Habilitação"
                      disabled
                    />
                    <TextInput
                      style={styles.listinputtext}
                      onChangeText={funcionario =>
                        this.setState({ 'funcionario.telefone': funcionario })
                      }
                      value={
                        this.state.data.data[0]._funcionario[0]
                          ? this.state.data.data[0]._funcionario[0].telefone
                          : null
                      }
                      showSoftInputOnFocus={true}
                      label="Telefone Residencial"
                      disabled
                    />
                    <TextInput
                      style={styles.listinputtext}
                      onChangeText={funcionario =>
                        this.setState({ 'funcionario.celular': funcionario })
                      }
                      value={
                        this.state.data.data[0]._funcionario[0]
                          ? this.state.data.data[0]._funcionario[0].celular
                          : null
                      }
                      showSoftInputOnFocus={true}
                      label="Celular"
                      disabled
                    />
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
