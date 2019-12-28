import React, { Component } from 'react'
import {
    View, Text
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Home extends Component {
    constructor(props) {
        super(props)


    }


    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#5DBCD2',
        },
        headerBackTitle: null,
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        return (
            <View>
                <View>
                    <TouchableOpacity
                        title="Tela Responsavel"
                        onPress={() => this.props.navigation.navigate('ScreenResponsavel')}
                    >
                        <Text>Responsavel</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        title="Listar Responsavel"
                        onPress={() => this.props.navigation.navigate('ListaResponsavel')}
                        >
                        <Text>Listar Responsavel</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        title="Listar Funcionario"
                        onPress={() => this.props.navigation.navigate('ListaFuncionario')}
                        >
                        <Text>Listar Funcionario</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        title="Listar Veiculo"
                        onPress={() => this.props.navigation.navigate('ListaVeiculo')}
                        >
                        <Text>Listar Veiculo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
