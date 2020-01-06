import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import {
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import styles from './style';
export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Home',
    header: null,
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
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../../imagem/template/gradiente1.png')}>
        <View style={styles.container}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.textInput}
              onChangeText={() => this.handleInput}
              // value={}
              blurOnSubmit={true}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={() => this.handleInput}
              // value={}
              blurOnSubmit={true}
            />
          </View>
          <View style={styles.containerBtn}>
            <TouchableHighlight
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('Mapa')}>
              <Text style={styles.textBtn}>ENTRAR</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
