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
import api from '../../../services/api';

export default class EditarResponsavel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      id: this.props.navigation.state.params._id, // passagem do parametro _id
      cpf: this.props.navigation.state.params.cpf, // passagem do parametro _id
      nome: this.props.navigation.state.params.nome,
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
      responseJson = JSON.stringify(response);
      responseObj = JSON.parse(responseJson);

      this.setState(
        {
          data: responseObj,
          loading: false,
        },
        function() {},
      );
    } catch (error) {
      return error;
    }
  }

  //TODO criar componente que mostre todo os dados do usuario
  dataResponsavel() {
    //
  }

  render() {
    this.findResponsavel();
    const {data} = this.state;

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
                        onChangeText={text => this._handleChangeText(text)}
                        value={item.nome}
                      />
                      <TextInput
                        // style={{color: '#00'}}
                        onChangeText={text => this._handleChangeText(text)}
                        value={item.cpf}
                      />
                      <TextInput
                        //   style={{color: '#fff'}}
                        onChangeText={text => this._handleChangeText(text)}
                        value={item.email}
                      />
                      <TextInput
                        //   style={{color: '#fff'}}
                        onChangeText={text => this._handleChangeText(text)}
                        value={item.telefone}
                      />
                      <TextInput
                        //   style={{color: '#fff'}}
                        onChangeText={text => this._handleChangeText(text)}
                        value={item.celular}
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
                          onChangeText={text => this._handleChangeText(text)}
                          value={item.endereco.rua}
                        />
                        <TextInput
                          style={{marginLeft: 10}}
                          onChangeText={text => this._handleChangeText(text)}
                          value={item.endereco.numero.toString()}
                        />
                      </View>
                      <View>
                        <TextInput
                          //   style={{color: '#fff'}}
                          onChangeText={text => this._handleChangeText(text)}
                          value={item.endereco.bairro}
                        />
                        <TextInput
                          //   style={{color: '#fff'}}
                          onChangeText={text => this._handleChangeText(text)}
                          value={item.endereco.cidade}
                        />
                        <TextInput
                          //   style={{color: '#fff'}}
                          onChangeText={text => this._handleChangeText(text)}
                          value={item.endereco.estado}
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
                      <TextInput
                        //   style={{color: '#fff'}}
                        onChangeText={text => this._handleChangeText(text)}
                        value={item._aluno.nome}
                      />
                      <TextInput
                        //   style={{color: '#fff'}}
                        onChangeText={text => this._handleChangeText(text)}
                        value={item._aluno.matricula}
                      />
                      <TextInput
                        //   style={{color: '#fff'}}
                        onChangeText={text => this._handleChangeText(text)}
                        value={item._aluno._cpfResponsavel}
                      />
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
              <TouchableOpacity>
                <Image
                  style={{width: 30, height: 30, borderRadius: 30}}
                  source={require('../../../imagem/iconSalvar/salvar.png')}></Image>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginLeft: 20,
              }}>
              <TouchableOpacity>
                <Image
                  style={{width: 30, height: 30, borderRadius: 30}}
                  source={require('../../../imagem/iconCancelar/cancelar.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  }
}
