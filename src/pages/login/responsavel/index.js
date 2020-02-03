import React, {Component} from 'react';
import {View, Text, ImageBackground, TextInput, TouchableHighlight} from 'react-native';
import styles from './style';

export default class Resp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../../../img/template/gradiente1.png')}>
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
