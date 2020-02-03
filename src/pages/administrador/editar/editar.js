import React, {Component} from 'react';
import {View} from 'react-native';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import api from '../../../services/api';
import styles from './style';

export default class editResp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };

    this._handleEdit = this._handleEdit.bind(this)
  }



  _handleEdit = async () => {
    try {
      let response = await api.listaResponsavel();
      responseJson = JSON.stringify(response);
      responseObj = JSON.parse(responseJson);

      this.setState(
        {
          data: responseObj,
          loading: false,
        },
        function() {},
      );
      console.info(this.state.data)
    } catch (error) {
      return error;
    }
  };

  render() {
    return (
      <View>
        <FlatList
          keyExtractor={item => item._id}
          data={this.state.data}
          renderItem={({item}) => (
            <View>
              <View>
                <TextInput
                  style={{color: '#000000'}}
                  onChangeText={text => this._handleChangeText(text)}
                  value={item.nome}
                />
                <TextInput
                  style={{color: '#000000'}}
                  onChangeText={text => this._handleChangeText(text)}
                  value={item.cpf}
                />
                <TextInput
                  style={{color: '#000000'}}
                  onChangeText={text => this._handleChangeText(text)}
                  value={item.email}
                />
                <TextInput
                  style={{color: '#000000'}}
                  onChangeText={text => this._handleChangeText(text)}
                  value={item.telefone}
                />
                <TextInput
                  style={{color: '#000000'}}
                  onChangeText={text => this._handleChangeText(text)}
                  value={item.celular}
                />
              </View>
              <View>
                <Text>Endereço</Text>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={{color: '#000000'}}
                    onChangeText={text => this._handleChangeText(text)}
                    value={item.endereco.rua}
                  />
                  <TextInput
                    style={{color: '#000000'}}
                    onChangeText={text => this._handleChangeText(text)}
                    value={item.endereco.numero}
                  />
                </View>
                <TextInput
                  style={{color: '#000000'}}
                  onChangeText={text => this._handleChangeText(text)}
                  value={item.endereco.bairro}
                />
                <TextInput
                  style={{color: '#000000'}}
                  onChangeText={text => this._handleChangeText(text)}
                  value={item.endereco.cidade}
                />
                <TextInput
                  style={{color: '#000000'}}
                  onChangeText={text => this._handleChangeText(text)}
                  value={item.endereco.estado}
                />
              </View>
              <View>
                <TextInput
                  style={{color: '#000000'}}
                  onChangeText={text => this._handleChangeText(text)}
                  value={item.aluno.nome}
                />
                <TextInput
                  style={{color: '#000000'}}
                  onChangeText={text => this._handleChangeText(text)}
                  value={item.aluno.matricula}
                />
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}
