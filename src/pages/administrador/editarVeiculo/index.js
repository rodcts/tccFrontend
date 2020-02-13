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
import styles from './style';

export default class EditaVeiculo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      id: this.props.navigation.state.params._id, // passagem do parametro _id
      placa: this.props.navigation.state.params.placa, // passagem do parametro _id
      modelo: this.props.navigation.state.params.modelo,
      loading: true,
    };

    console.info('ID ===>>' + this.state.id);
    console.info('PLACA ===>>' + this.state.placa);
    console.info('MODELO ===>>' + this.state.modelo);

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

  componentDidMount() {
    this.findVeiculo();
  }

  //TODO criar metodo que vai chamar a rota de atualização
  async findVeiculo() {
    try {
      const {placa} = this.state;
      let response = await api.buscarVeiculo(placa);
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
                        DADOS VEICULO
                      </Text>

                      <Text>{item._id}</Text>
                      <TextInput
                        // style={{color: '#00'}}
                        onChangeText={text => this._handleChangeText(text)}
                        value={item.placa}
                      />
                      <TextInput
                        //   style={{color: '#fff'}}
                        onChangeText={text => this._handleChangeText(text)}
                        value={item.modelo}
                      />
                      <TextInput
                        //   style={{color: '#fff'}}
                        onChangeText={text => this._handleChangeText(text)}
                        value={item.ano}
                      />
                    </View>
                    <Text
                      style={{
                        marginTop: 30,
                        paddingBottom: 5,
                        borderBottomWidth: 1,
                      }}>
                      DADOS DO MOTORISTA
                    </Text>
                    <View>
                      <TextInput
                        //   style={{color: '#fff'}}
                        onChangeText={text => this._handleChangeText(text)}
                        value={item._nomeFuncionario}
                      />
                      <TextInput
                        //   style={{color: '#fff'}}
                        onChangeText={text => this._handleChangeText(text)}
                        value={item.cnh}
                      />
                      <TextInput
                        //   style={{color: '#fff'}}
                        onChangeText={text => this._handleChangeText(text)}
                        value={item._cpfFuncionario}
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
                  source={require('../../../img/iconSalvar/salvar.png')}></Image>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginLeft: 20,
              }}>
              <TouchableOpacity>
                <Image
                  style={{width: 30, height: 30, borderRadius: 30}}
                  source={require('../../../img/iconCancelar/cancelar.png')}></Image>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  }
}
