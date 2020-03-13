import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import api from '../../../../services/api';
import styles from './style';

export default class addResp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      nome: '',
      cpf: '',
      email: '',
      telefone: '',
      celular: '',
      endereco: {
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
      },
      tipoUsuario: 'responsavel',
      senha: 123,
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd = async () => {
    // const { data, nome, cpf, email } = this.state;
    try {
      this.state.data = {
        nome: this.state.nome,
        cpf: this.state.cpf,
        email: this.state.email,
        endereco: {
          rua: this.state.rua,
          numero: this.state.numero,
          bairro: this.state.bairro,
          cidade: this.state.cidade,
          estado: this.state.estado,
        },
        telefone: this.state.telefone,
        celular: this.state.celular,
        tipoUsuario: this.state.tipoUsuario,
        senha: this.state.senha,
      };

      console.info('antes do req', this.state.data);
      let req = await api.adicionarResponsavel(this.state.data);
      console.info('depois do req ', req);
    } catch (error) {}
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ margin: 10, padding: 10, flex: 1 }}>
          <View>
            <Text>Dados Responsavel</Text>
            <View>
              <TextInput
                style={{
                  height: 43,
                  fontSize: 20,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#eaeaea',
                  backgroundColor: '#fafafa',
                  margin: 15,
                  padding: 5,
                }}
                placeholder="Nome Completo"
                placeholderColor="#c4c3cb"
                autoCapitalize="characters"
                autoFocus={true}
                onChangeText={nome => this.setState({ nome })}
                value={this.state.nome}
              />
              <TextInput
                style={{
                  height: 43,
                  fontSize: 20,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#eaeaea',
                  backgroundColor: '#fafafa',
                  margin: 15,
                  padding: 5,
                }}
                placeholder="CPF"
                placeholderColor="#c4c3cb"
                maxLength={11}
                onChangeText={cpf => this.setState({ cpf })}
                value={this.state.cpf}
              />
              <TextInput
                style={{
                  height: 43,
                  fontSize: 20,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#eaeaea',
                  backgroundColor: '#fafafa',
                  margin: 15,
                  padding: 5,
                }}
                placeholder="EMAIL"
                placeholderColor="#c4c3cb"
                autoCapitalize="none"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            </View>
          </View>
          <View>
            <Text>Dados Endereço</Text>
            <View>
              <TextInput
                style={{
                  height: 43,
                  fontSize: 20,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#eaeaea',
                  backgroundColor: '#fafafa',
                  margin: 15,
                  padding: 5,
                }}
                placeholder="Rua"
                placeholderColor="#c4c3cb"
                autoCapitalize="characters"
                onChangeText={rua => this.setState({ rua })}
                value={this.state.rua}
              />
              <TextInput
                style={{
                  height: 43,
                  fontSize: 20,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#eaeaea',
                  backgroundColor: '#fafafa',
                  margin: 15,
                  padding: 5,
                }}
                placeholder="Numero"
                placeholderColor="#c4c3cb"
                autoCapitalize="characters"
                onChangeText={numero => this.setState({ numero })}
                value={this.state.numero}
              />
              <TextInput
                style={{
                  height: 43,
                  fontSize: 20,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#eaeaea',
                  backgroundColor: '#fafafa',
                  margin: 15,
                  padding: 5,
                }}
                placeholder="Bairro"
                placeholderColor="#c4c3cb"
                autoCapitalize="characters"
                onChangeText={bairro => this.setState({ bairro })}
                value={this.state.bairro}
              />
              <TextInput
                style={{
                  height: 43,
                  fontSize: 20,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#eaeaea',
                  backgroundColor: '#fafafa',
                  margin: 15,
                  padding: 5,
                }}
                placeholder="Cidade"
                placeholderColor="#c4c3cb"
                autoCapitalize="characters"
                onChangeText={cidade => this.setState({ cidade })}
                value={this.state.cidade}
              />
              <TextInput
                style={{
                  height: 43,
                  fontSize: 20,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#eaeaea',
                  backgroundColor: '#fafafa',
                  margin: 15,
                  padding: 5,
                }}
                placeholder="Estado"
                placeholderColor="#c4c3cb"
                autoCapitalize="characters"
                onChangeText={estado => this.setState({ estado })}
                value={this.state.estado}
              />
            </View>
          </View>
          <View>
            <Text>Dados Contato</Text>
            <View>
              <TextInput
                style={{
                  height: 43,
                  fontSize: 20,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#eaeaea',
                  backgroundColor: '#fafafa',
                  margin: 15,
                  padding: 5,
                }}
                placeholder="Celular"
                placeholderColor="#c4c3cb"
                maxLength={9}
                onChangeText={celular => this.setState({ celular })}
                value={this.state.celular}
              />
              <TextInput
                style={{
                  height: 43,
                  fontSize: 20,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#eaeaea',
                  backgroundColor: '#fafafa',
                  margin: 15,
                  padding: 5,
                }}
                placeholder="Residencial"
                placeholderColor="#c4c3cb"
                maxLength={8}
                onChangeText={telefone => this.setState({ telefone })}
                value={this.state.telefone}
              />
            </View>
          </View>
          <View>
            <Text>Dados Aluno</Text>
            <View>
              <TextInput
                style={{
                  height: 43,
                  fontSize: 20,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#eaeaea',
                  backgroundColor: '#fafafa',
                  margin: 15,
                  padding: 5,
                }}
                placeholder="Nome Completo"
                placeholderColor="#c4c3cb"
                autoCapitalize="characters"
                onChangeText={nomeAluno => this.setState({ nomeAluno })}
                value={this.state.nomeAluno}
              />
              <TextInput
                style={{
                  height: 43,
                  fontSize: 20,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#eaeaea',
                  backgroundColor: '#fafafa',
                  margin: 15,
                  padding: 5,
                }}
                placeholder="Matricula"
                placeholderColor="#c4c3cb"
                autoCapitalize="characters"
                onChangeText={matricula => this.setState({ matricula })}
                value={this.state.matricula}
              />
            </View>
          </View>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              paddingTop: 30,
              paddingBottom: 30,
            }}>
            <Button
              style={{
                backgroundColor: '#3897f1',
                borderRadius: 5,
                height: 45,
                shadowRadius: 0,
                shadowOpacity: 0,
              }}
              onPress={() => this.handleAdd()}
              title="Cadastrar">
              Login
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
