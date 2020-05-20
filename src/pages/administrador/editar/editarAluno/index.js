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
      nomeAluno: this.props.navigation.state.params.dataParse.nomeAluno,
      rua: this.props.navigation.state.params.dataParse.endereco.rua,
      numero: this.props.navigation.state.params.dataParse.endereco.numero,
      bairro: this.props.navigation.state.params.dataParse.endereco.bairro,
      cidade: this.props.navigation.state.params.dataParse.endereco.cidade,
      estado: this.props.navigation.state.params.dataParse.endereco.estado,
      email: this.props.navigation.state.params.dataParse.email,
      telefone: this.props.navigation.state.params.dataParse.telefone,
      celular: this.props.navigation.state.params.dataParse.celular,
      loading: true,
    };

    this.findResponsavel = this.findResponsavel.bind(this);
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
  async findResponsavel() {
    try {
      const { cpf } = this.state;
      let response = await api.buscarResponsavel(cpf);

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
    this.findResponsavel();
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
      let response = await api.deletaResponsavel(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async handleUpdate() {
    try {
      const {
        data,
        nome,
        cpf,
        email,
        rua,
        numero,
        bairro,
        cidade,
        estado,
        telefone,
        celular,
      } = this.state;

      let id = data.data[0]._id;

      let resp = await api.atualizarResponsavel(id, {
        nome: nome,
        cpf: cpf,
        email: email,
        'endereco.rua': rua,
        'endereco.numero': parseInt(numero),
        'endereco.bairro': bairro,
        'endereco.cidade': cidade,
        'endereco.estado': estado,
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
                      label="CPF"
                      defaultValue={item.cpf}
                      showSoftInputOnFocus={true}
                      disabled
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
                  <Subheading style={styles.listtitle}>ENDEREÇO</Subheading>

                  <View>
                    <View>
                      <TextInput
                        style={styles.listinputtext}
                        onChangeText={rua => this.setState({ rua })}
                        value={this.state.data.rua}
                        label="Logradouro"
                        defaultValue={item.endereco.rua}
                      />
                      <TextInput
                        style={styles.listinputtext}
                        onChangeText={numero => this.setState({ numero })}
                        value={this.state.data.numero}
                        label="Numero"
                        defaultValue={item.endereco.numero.toString()}
                      />
                    </View>
                    <View>
                      <TextInput
                        style={styles.listinputtext}
                        onChangeText={bairro => this.setState({ bairro })}
                        value={this.state.data.bairro}
                        label="Bairro"
                        defaultValue={item.endereco.bairro}
                      />
                      <TextInput
                        style={styles.listinputtext}
                        onChangeText={cidade => this.setState({ cidade })}
                        value={this.state.data.cidade}
                        label="Cidade"
                        defaultValue={item.endereco.cidade}
                        disabled
                      />
                      <TextInput
                        style={styles.listinputtext}
                        onChangeText={estado => this.setState({ estado })}
                        value={this.state.data.estado}
                        defaultValue={item.endereco.estado}
                        label="Estado"
                        disabled
                      />
                    </View>
                  </View>
                  <Subheading style={styles.listtitle}>DADOS ALUNO</Subheading>
                  <View>
                    <TextInput
                      style={styles.listinputtext}
                      label="Nome Completo"
                      value={item._aluno[0].nome}
                      disabled
                    />
                    <TextInput
                      style={styles.listinputtext}
                      label="Matricula"
                      value={item._aluno[0].matricula}
                      disabled
                    />
                    <TextInput
                      style={styles.listinputtext}
                      value={item._aluno[0]._cpfResponsavel}
                      label="CPF Associado (Responsavel)"
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
