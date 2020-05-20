import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {  TextInput } from 'react-native-gesture-handler';
import api from '../../../../services/api';
import styles from './style';

export default class addResp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      nome: '',
      cpf: '',
      cnh: '',
      email: '',
      cargo: '',
      placa: '',
      ano: '',
      modelo: '',
      categoria: '',
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd = async () => {
    try {
      this.state.dataFuncionario = {
        nome: this.state.nome,
        cpf: this.state.cpf,
        cnh: this.state.cnh,
        cargo: this.state.cargo,
        email: this.state.email,
        celular: this.state.celular,
        telefone: this.state.telefone,
      };
      this.state.dataVeiculo = {
        cpf: this.state.cpf,
        placa: this.state.placa,
        ano: this.state.ano,
        modelo: this.state.modelo,
        categoria: this.state.categoria,
      };
      console.info('request para api ', this.state.data)
      await api.adicionarFuncionario(this.state.dataFuncionario);
      await api.adicionarVeiculo(this.state.dataVeiculo);
      alert('Gravado com sucesso!');
    } catch (error) {
      console.log('Erro gravar responsavel ', error);
    }
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ margin: 10, padding: 10, flex: 1 }}>
          <View>
            <Text>Dados Funcionario</Text>
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
                placeholder="Carteira Nacional de Habilitação"
                placeholderColor="#c4c3cb"
                maxLength={11}
                onChangeText={cnh => this.setState({ cnh })}
                value={this.state.cnh}
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
            <Text>Dados Cargo</Text>
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
                placeholder="Cargo"
                placeholderColor="#c4c3cb"
                autoCapitalize="characters"
                onChangeText={cargo => this.setState({ cargo })}
                value={this.state.cargo}
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
