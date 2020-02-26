import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import {TouchableOpacity, FlatList} from 'react-native-gesture-handler';
import api from '../../../../services/api';
import styles from './style';
import {Icon} from 'react-native-elements';

export default class EditarResponsavel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      body: [],
      id: this.props.navigation.state.params._id, // passagem do parametro _id
      cpf: this.props.navigation.state.params.cpf, // passagem do parametro cpf
      nome: this.props.navigation.state.params.nome, // passagem do parametro nome
      rua: '',
      numero: 0,
      bairro: '',
      cidade: '',
      estado: '',
      email: '',
      telefone: '',
      celular: '',
      loading: true,
    };

    console.info('ID ===>>' + this.state.id);
    console.info('CPF ===>>' + this.state.cpf);
    console.info('NOME ===>>' + this.state.nome);
    console.info('DATA ===>>' + this.state.data);
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

  //TODO criar metodo que vai chamar a rota de atualização
  async findResponsavel() {
    try {
      const {cpf} = this.state;
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
    const {data} = this.state;
  }

  //TODO criar componente que mostre todo os dados do usuario

  // _handleChangeText = (
  //   nome,
  //   cpf,
  //   email,
  //   telefone,
  //   celular,
  //   rua,
  //   numero,
  //   bairro,
  //   cidade,
  //   estado,
  // ) => {
  //   (this.state.nome = nome),
  //     (this.state.cpf = cpf),
  //     (this.state.email = email),
  //     (this.state.telefone = telefone),
  //     (this.state.celular = celular),
  //     (this.state.rua = rua),
  //     (this.state.numero = numero),
  //     (this.state.bairro = bairro),
  //     (this.state.cidade = cidade),
  //     (this.state.estado = estado);
  // };

  async handleUpdate() {
    try {
      let resp = await api.atualizarResponsavel(this.state.id, body);
      console.info('resp ===>', resp);
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
                renderItem={({item}) => (
                  <View style={{marginLeft: 10}}>
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
                        onChangeText={nome => this.setState({nome})}
                        value={this.state.nome}
                        placeholder={item.nome}
                      />
                      <Text>{item.cpf}</Text>
                      <TextInput
                        //   style={{color: '#fff'}}
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                        placeholder={item.email}
                      />
                      <TextInput
                        //   style={{color: '#fff'}}
                        onChangeText={telefone => this.setState({telefone})}
                        value={this.state.telefone}
                        placeholder={item.telefone}
                      />
                      <TextInput
                        //   style={{color: '#fff'}}
                        onChangeText={celular => this.setState({celular})}
                        value={this.state.celular}
                        placeholder={item.celular}
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
                      <View style={{flexDirection: 'row'}}>
                        <TextInput
                          // style={{color: '#fff'}}
                          onChangeText={rua => this.setState({rua})}
                          value={this.state.rua}
                          placeholder={item.endereco.rua}
                        />
                        <TextInput
                          style={{marginLeft: 10}}
                          onChangeText={numero => this.setState({numero})}
                          value={this.state.numero}
                          placeholder={item.endereco.numero.toString()}
                        />
                      </View>
                      <View>
                        <TextInput
                          //   style={{color: '#fff'}}
                          onChangeText={bairro => this.setState({bairro})}
                          value={this.state.bairro}
                          placeholder={item.endereco.bairro}
                        />
                        <TextInput
                          //   style={{color: '#fff'}}
                          onChangeText={cidade => this.setState({cidade})}
                          value={this.state.cidade}
                          placeholder={item.endereco.cidade}
                        />
                        <TextInput
                          //   style={{color: '#fff'}}
                          onChangeText={estado => this.setState({estado})}
                          value={this.state.estado}
                          placeholder={item.endereco.rua}
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
                      <Text>{item._aluno[0].nome}</Text>
                      <Text>{item._aluno[0].matricula}</Text>
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
              <TouchableOpacity onPress={() => this.handleUpdate}>
                <Icon name="check-circle" type="font-awesome" color="#000000" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginLeft: 20,
              }}>
              <TouchableOpacity>
                <Icon name="user-times" type="font-awesome" color="#000000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  }
}
