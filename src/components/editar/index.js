import React, { Component } from 'react'
import {
    View, Text, Button, TextInput
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class EditarResponsavel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            name: 'Rodrigo',
            email: '@mail.com'

        }

    }


    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('data'),

            headerStyle: {
                backgroundColor: '#5DBCD2',
            },
            headerBackTitle: null,
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }
    };

    render() {
        return (
            <View >
                <Text>Editar Responsavel</Text>
                <View >
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.name}
                        ></TextInput>
                        <TextInput
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.email}
                        ></TextInput>

                    </View>
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.name}
                        ></TextInput>
                        <TextInput
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.email}
                        ></TextInput>

                    </View>
                    <View style={{ flexDirection: 'row' }}>

                        <TextInput
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.name}
                        ></TextInput>
                        <TextInput
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.email}
                        ></TextInput>

                    </View>
                    <View style={{ flexDirection: 'row', margin: 30, justifyContent: 'center', backgroundColor: '#5DBCD2', }}>
                        <TouchableOpacity

                        // onPress={() => this.props.navigation.navigate()}
                        >
                            <Text style={{ color: 'white', padding: 10 }}>Atualizar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={{ color: 'white', padding: 10 }}>Cancelar</Text>

                        </TouchableOpacity>


                    </View>
                </View>
            </View >
        )
    }
}
