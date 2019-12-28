import React, { Component } from 'react'
import {
    View, Text, FlatList, List, TextInput, Button, TouchableOpacity, Alert
} from 'react-native'

import api from '../../services/api'



export default class ListaResponsavel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

        this._handleLista = this._handleLista.bind(this)
    }
    static navigationOptions = {
        // title: 'Lista',
        headerStyle: {
            backgroundColor: '#5DBCD2',
        },
        headerBackTitle: null,
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    componentDidMount() {
        this._handleLista()
    }

    _handleLista = async () => {
        try {
            let rr = await api.listaResponsavel()

            let res = this.setState({
                data: rr
            }, function () {

            });
            return res
        } catch (error) {
            return error
        }
    }

    _handleChangeText = (text) => {

        this.setState({ dtNome: text });
    };

    handleExcluir() {
        Alert.alert(
            'ATENÇÃO! ',
            'A Exclusão será permanente',
            [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]
        )
    }

    render() {


        return (
            <View >
                <FlatList
                    // data={this.state.data}
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <View style={{ marginTop: 10, padding: 20, flex: 1,  }}>
                            <TextInput
                                style={{ flex: 1 }}
                                onChangeText={text => this._handleChangeText(text)}
                                value={item.nome}
                            />
                            <View style={{
                                flex: 1, flexDirection: 'row-reverse', justifyContent: 'center', alignItems: 'center'

                            }}>
                                <TouchableOpacity
                                    style={{ width: 50 }}
                                    onPress={() => this.props.navigation.navigate('EditarResponsavel', this.state.data)}
                                >
                                    <Text>Editar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ width: 50 }}
                                    onPress={this.handleExcluir}
                                >
                                    <Text>Excluir</Text>
                                </TouchableOpacity>

                                <TextInput
                                    style={{ flex: 1 }}
                                    onChangeText={text => this._handleChangeText(text)}
                                    value={item.email}
                                />




                            </View>
                        </View>
                    )}
                    keyExtractor={item => item._id}
                />
            </View>
        )
    }
}