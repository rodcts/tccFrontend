import React, {Component} from 'react';
import {View, Alert, Text, Image, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import styles from './style';
import iconResponsavel from '../../imagem/iconResponsavel/minhaFoto.png';
import iconVeiculo from '../../imagem/iconVeiculo/iconVeiculo.png';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locAluno: {
        coords: {
          latitude: 0,
          longitude: 0,
        },
      },
      region: {
        coords: {
          latitude: 0,
          longitude: 0,
        },
      },
    };
    this.getLocation();
    this.getLocation2();
  }

  getLocation() {
    Geolocation.getCurrentPosition(
      position => {
        const initialPosition = JSON.stringify(position); // converter de objeto json para texto [Object object]
        const initialPosition2 = JSON.parse(initialPosition); // converter para texto para objeto json
        this.setState({region: initialPosition2});
        // console.info('=====>>' + position.coords.latitude);
        // console.info('=====>>' + initialPosition);
        // console.info('=====>>' + initialPosition2.coords.latitude);
        console.info('=====>> region    ' + initialPosition);
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }

  getLocation2() {
    Geolocation.getCurrentPosition(position => {
      const secondPosition = JSON.stringify(position);
      const secondPosition2 = JSON.parse(secondPosition);

      const loc2 = {
        coords: {
          latitude: 37.7785951,
          longitude: -122.3914585,
        },
      };

      this.setState({locAluno: loc2});

      console.info('===>> secondPosition2 ' + secondPosition);
      console.info('secondPosition' + this.state.locAluno.coords.latitude);
      console.info('secondPosition' + this.state.locAluno.coords.longitude);
    });
    // const loc = {
    //   latitude: 37.7785951,
    //   longitude: -122.3914585,
    //   latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421,
    // };

    // const alun = this.state.locAluno;

    // this.setState({alun: loc});

    // console.info('===>>' + loc);
    // console.info('===>>' + alun);
  }

  convertTime(e) {
    // let dt = new Date(e * 1000);
    // let hora = dt.getHours();
    // let min = dt.getMinutes();
    // let secs = dt.getSeconds();

    // let data = hora +':'+ min +':'+ secs
    let data = new Date(e).toLocaleDateString('pt-PTBR');
    let time = new Date(e).toLocaleTimeString('pt-PTBR');

    let dtFim = data + '   ' + time;

    return dtFim;
  }

  render() {
    return (
      <View>
        <MapView
          style={styles.mapStyle}
          // showsUserLocation={true}
          // showsMyLocationButton={true}
          // showsPointsOfInterest={true}
          // showsCompass={true}
          // minZoomLevel={0}
          // maxZoomLevel={20}
          enableHighAccuracy={true}
          region={{
            latitude: this.state.region.coords.latitude,
            longitude: this.state.region.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            // style={styles.iconMarker}
            coordinate={{
              latitude: this.state.region.coords.latitude,
              longitude: this.state.region.coords.longitude,
            }}
            // TODO title deverá receber  como parametro o nome de quem esta logado
            title={'Responsavel'}
            description={this.convertTime(this.state.region.timestamp)}
            // TODO image deverá receber a imagem do responsavel atual logado
            image={iconResponsavel}>
            <View>
              {/* <Text>{this.convertTime(this.state.region.timestamp)}</Text> */}
            </View>
          </Marker>
          <Marker
            coordinate={{
              latitude: this.state.locAluno.coords.latitude,
              longitude: this.state.locAluno.coords.longitude,
            }}
            title={'Aluno'}
            description={this.convertTime(this.state.region.timestamp)}
            image={iconVeiculo}
          />
        </MapView>
      </View>
    );
  }
}
