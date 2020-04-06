import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  Alert,
  ActivityIndicator,
  TouchableNativeFeedbackBase,
} from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import api from '../../../../services/api';
import styles from './style';
import { Icon } from 'react-native-elements';

export default class EditarResponsavel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      id: this.props.navigation.state.params.id, // passagem do parametro _id
      cpf: this.props.navigation.state.params.cpf, // passagem do parametro cpf
      nome: this.props.navigation.state.params.nome, // passagem do parametro nome
      nomeAluno: this.props.navigation.state.params.nomeAluno, // passagem do parametro nome
      rua: this.props.navigation.state.params.rua,
      numero: this.props.navigation.state.params.numero,
      bairro: this.props.navigation.state.params.bairro,
      cidade: this.props.navigation.state.params.cidade,
      estado: this.props.navigation.state.params.estado,
      email: this.props.navigation.state.params.email,
      telefone: this.props.navigation.state.params.telefone,
      celular: this.props.navigation.state.params.celular,
      loading: true,
    };

    console.info('ID ===>>' + this.state.id);
    console.info('CPF ===>>' + this.state.cpf);
    console.info('NOME ===>>' + this.state.nome);
    console.info('NOME ALUNO ===>>' + this.state.nomeAluno);
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
      let response = await api.buscarResponsavel(this.state.cpf);

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
    const { data } = this.state;
  }

  async handleDeletar() {
    try {
      // const { id } = this.state;
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
        id,
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

      console.log('handleUpdate id', id);
      console.log('handleUpdate nome ', nome);
      console.log('handleUpdate cpf', cpf);
      console.log('handleUpdate email', email);

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

      // console.info('resp ===>', resp.data);
    } catch (error) {}
  }

  render() {
    // this.findResponsavel();
    // const {data} = this.state;

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
        <View>
          <View
            style={{
              marginLeft: 20,
              marginRight: 20,
              marginTop: 30,
              paddingTop: 20,
              paddingBottom: 40,
              backgroundColor: '#F0F8FF',
              borderRadius: 15,
            }}>
            <View>
              {/* <Text>{JSON.stringify(this.state.data.data)}</Text> */}

              <FlatList
                keyExtractor={item => item._id}
                data={this.state.data.data}
                renderItem={({ item }) => (
                  <View style={{ marginLeft: 10 }}>
                    <View>
                      <Text
                        style={{
                          paddingBottom: 5,
                          borderBottomWidth: 1,
                        }}>
                        DADOS RESPONSAVEL
                      </Text>

                      <TextInput
                        // style={{color: '#fff'}}
                        onChangeText={nome => this.setState({ nome })}
                        value={this.state.nome}
                        // placeholder={item.nome}
                        defaultValue={item.nome}
                        showSoftInputOnFocus={true}
                      />
                      <Text>{item.cpf}</Text>
                      <TextInput
                        //   style={{color: '#fff'}}
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                        // placeholder={item.email}
                        defaultValue={item.email}
                      />
                      <TextInput
                        //   style={{color: '#fff'}}
                        onChangeText={telefone => this.setState({ telefone })}
                        value={this.state.telefone}
                        // placeholder={item.telefone}
                        defaultValue={item.telefone}
                      />
                      <TextInput
                        //   style={{color: '#fff'}}
                        onChangeText={celular => this.setState({ celular })}
                        value={this.state.celular}
                        // placeholder={item.celular}
                        defaultValue={item.celular}
                      />
                    </View>
                    <Text
                      style={{
                        marginTop: 30,
                        paddingBottom: 5,
                        borderBottomWidth: 1,
                      }}>
                      ENDEREÇO
                    </Text>
                    <View>
                      <View style={{ flexDirection: 'row' }}>
                        <TextInput
                          // style={{color: '#fff'}}
                          onChangeText={rua => this.setState({ rua })}
                          value={this.state.rua}
                          // placeholder={item.endereco.rua}
                          defaultValue={item.endereco.rua}
                        />
                        <TextInput
                          style={{ marginLeft: 10 }}
                          onChangeText={numero => this.setState({ numero })}
                          value={this.state.numero}
                          // placeholder={item.endereco.numero.toString()}
                          defaultValue={item.endereco.numero.toString()}
                        />
                      </View>
                      <View>
                        <TextInput
                          //   style={{color: '#fff'}}
                          onChangeText={bairro => this.setState({ bairro })}
                          value={this.state.bairro}
                          // placeholder={item.endereco.bairro}
                          defaultValue={item.endereco.bairro}
                        />
                        <TextInput
                          //   style={{color: '#fff'}}
                          onChangeText={cidade => this.setState({ cidade })}
                          value={this.state.cidade}
                          // placeholder={item.endereco.cidade}
                          defaultValue={item.endereco.cidade}
                        />
                        <TextInput
                          //   style={{color: '#fff'}}
                          onChangeText={estado => this.setState({ estado })}
                          value={this.state.estado}
                          // placeholder={item.endereco.rua}
                          defaultValue={item.endereco.rua}
                        />
                      </View>
                    </View>
                    <Text
                      style={{
                        marginTop: 30,
                        paddingBottom: 5,
                        borderBottomWidth: 1,
                      }}>
                      DADOS DO ALUNO
                    </Text>
                    <View>
                      <Text>Nome: {item._aluno[0].nome}</Text>
                      <Text>Matricula: {item._aluno[0].matricula}</Text>
                      <Text>
                        CPF Responsavel: {item._aluno[0]._cpfResponsavel}
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: 20,
            }}>
            <View
              style={{
                marginRight: 20,
              }}>
              <TouchableOpacity onPress={() => this.handleUpdate()}>
                <Icon name="check-circle" type="font-awesome" color="#000000" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginLeft: 20,
              }}>
              <TouchableOpacity onPress={() => this.handleDeletar()}>
                <Icon name="user-times" type="font-awesome" color="#000000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  }
}
