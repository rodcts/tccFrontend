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
      // matricula: '',
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd = async () => {
    try {
      this.state.data = {
        nome: this.state.nome,
        cpf: this.state.cpf,
        // matricula: this.state.matricula,
      };

      console.info('request para api ', this.state.data);
      await api.adicionarAluno(this.state.data);
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
