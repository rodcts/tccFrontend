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
      cpf: this.props.navigation.state.params.dataParse.cpf, // passagem do parametro cpf
      nome: this.props.navigation.state.params.dataParse.nome,
      email: this.props.navigation.state.params.dataParse.email,
      telefone: this.props.navigation.state.params.dataParse.telefone,
      celular: this.props.navigation.state.params.dataParse.celular,
      loading: true,
    };

    this.findFuncionario = this.findFuncionario.bind(this);
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
  async findFuncionario() {
    try {
      const { cpf } = this.state;
      let response = await api.buscarFuncionario(cpf);
      console.log('RESPONSE FUNC', response);
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
    this.findFuncionario();
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
      let response = await api.deletaFuncionario(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async handleUpdate() {
    try {
      const { data, nome, cpf, email, cnh, telefone, celular } = this.state;

      console.log('DATA.DATA update', data.data[0]._id);
      let id = data.data[0]._id;

      let resp = await api.atualizarFuncionario(id, {
        nome: nome,
        cpf: cpf,
        email: email,
        cnh: cnh,
        telefone: telefone,
        celular: celular,
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
                      DADOS RESPONSAVEL
                    </Subheading>

                    <TextInput
                      style={styles.listinputtext}
                      onChangeText={nome => this.setState({ nome })}
                      value={this.state.data.nome}
                      defaultValue={item.nome}
                      showSoftInputOnFocus={true}
                      label="Nome Completo"
                    />
                    <TextInput
                      style={styles.listinputtext}
                      label="MATRICULA"
                      defaultValue={item.matricula}
                      showSoftInputOnFocus={true}
                      disabled
                    />
                    <TextInput
                      style={styles.listinputtext}
                      label="CPF"
                      defaultValue={item.cpf}
                      showSoftInputOnFocus={true}
                      disabled
                    />
                    <TextInput
                      style={styles.listinputtext}
                      onChangeText={cargo => this.setState({ cargo })}
                      value={this.state.data.cargo}
                      label="CARGO"
                      defaultValue={item.cargo}
                    />
                    <TextInput
                      style={styles.listinputtext}
                      onChangeText={email => this.setState({ email })}
                      value={this.state.data.email}
                      label="Email"
                      defaultValue={item.email}
                    />
                    <TextInput
                      style={styles.listinputtext}
                      onChangeText={telefone => this.setState({ telefone })}
                      value={this.state.data.telefone}
                      label="Telefone Residencial"
                      defaultValue={item.telefone}
                    />
                    <TextInput
                      style={styles.listinputtext}
                      onChangeText={celular => this.setState({ celular })}
                      value={this.state.data.celular}
                      label="Telefone Celular"
                      defaultValue={item.celular}
                    />
                  </View>
                </View>
              )}
            />
          </View>
          <View style={styles.btnfooter}>
            <IconButton
              icon="account-check"
              size={50}
              onPress={() => this.handleUpdate()}
            />
            <IconButton
              icon="delete-sweep"
              size={50}
              onPress={() => this.handleDeletar()}
            />
          </View>
        </View>
      );
    }
  }
}
