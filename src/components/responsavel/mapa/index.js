import React, {Component} from 'react';
import {View, Alert, Text, Image, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import styles from './style';
import iconResponsavel from '../../../imagem/iconResponsavel/minhaFoto.png';
import iconVeiculo from '../../../imagem/iconVeiculo/iconVeiculo.png';
import {TouchableHighlight} from 'react-native-gesture-handler';

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
      locResponsavel: {
        coords: {
          latitude: 0,
          longitude: 0,
        },

        latitude: 0,
        longitude: 0,
      },
    };
    // this.getPrimaryLocation = this.getPrimaryLocation.bind(this);
    // this.getSecondLocation = this.getSecondLocation.bind(this);
    this.getPrimaryLocation();
    this.getSecondLocation();
    // this.watchLocation();

    // Geolocation.getCurrentPosition(info => console.log(info));
  }

  static navigationOptions = {
    header: null,
  };

  watchLocation() {
    Geolocation.watchPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
        distanceFilter: 1,
      },
    );
  }

  getPrimaryLocation() {
    Geolocation.getCurrentPosition(
      position => {
        const initialPosition = JSON.stringify(position); // converter de objeto json para texto [Object object]
        const initialPosition2 = JSON.parse(initialPosition); // converter para texto para objeto json

        const locationFirst = {
          coords: {
            latitude: 37.7785951,
            longitude: -122.3914585,
          },
        };

        this.setState({locResponsavel: locationFirst});
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }

  getSecondLocation() {
    Geolocation.getCurrentPosition(
      position => {
        const secondPosition = JSON.stringify(position);
        const secondPosition2 = JSON.parse(secondPosition);

        this.setState({locAluno: secondPosition2});
        // this.setState({locAluno: loc2});
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
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
    EdgePadding = {
      top: 30,
      right: 30,
      bottom: 30,
      left: 30,
    };
    return (
      <View>
        {/* <Text>
          Latitude {this.state.latitude} Longitude {this.state.longitude}
        </Text> */}
        <MapView
          style={styles.mapStyle}
          showsMyLocationButton={true}
          showsUserLocation={true}
          userLocationAnnotationTitle={this.convertTime(
            this.state.locAluno.timestamp,
          )} // O título da anotação para a localização atual do usuário. Isso só funciona se showsUserLocationfor verdade.
          followsUserLocation={false}
          loadingEnabled={true}
          scrollEnabled={true}
          showsCompass={true}
          minZoomLevel={0}
          maxZoomLevel={20}
          zoomTapEnabled={true}
          enableHighAccuracy={true}
          // mapPadding={EdgePadding}
          region={{
            latitude: this.state.locResponsavel.coords.latitude,
            longitude: this.state.locResponsavel.coords.longitude,
            latitudeDelta: 0.551,
            longitudeDelta: 0.555,
          }}>
       
          <Marker
            // style={styles.iconMarker}
            coordinate={{
              latitude: this.state.locResponsavel.coords.latitude,
              longitude: this.state.locResponsavel.coords.longitude,
            }}
            // TODO title deverá receber  como parametro o nome de quem esta logado
            title={'Responsavel'}
            description={this.convertTime(this.state.locAluno.timestamp)}
            // TODO image deverá receber a imagem do responsavel atual logado
            // image={iconResponsavel} // deprecated
          >
            <View>
              <Image
                style={{borderRadius: 50, width: 30, height: 30}}
                source={iconResponsavel}></Image>
            </View>
          </Marker>
          {/* <Marker
            coordinate={{
              latitude: this.state.locAluno.coords.latitude,
              longitude: this.state.locAluno.coords.longitude,
            }}
            title={'Aluno'}
            description={this.convertTime(this.state.locAluno.timestamp)}
            // image={iconVeiculo} // deprecated
          >
            <View>
              <Image style={{borderRadius: 50}} source={iconVeiculo}></Image>
            </View>
          </Marker> */}
        </MapView>
      </View>
    );
  }
}
