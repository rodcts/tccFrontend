import React, {Component} from 'react';
import {View, Alert, Text, Image, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import styles from './style';
import meuIcon from '../../imagem/iconMinhaFoto/minhaFoto.png';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        coords: {
          latitude: 0,
          longitude: 0,
        },
      },
    
    };
    this.getLocation();
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

convertTime(e){
  // let dt = new Date(e * 1000);
  // let hora = dt.getHours();
  // let min = dt.getMinutes();
  // let secs = dt.getSeconds();

  // let data = hora +':'+ min +':'+ secs
  let data = new Date(e).toLocaleDateString("pt-PTBR")
  let time = new Date(e).toLocaleTimeString("pt-PTBR")

  let dtFim = data +'   '+ time

  return dtFim

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
            title={'Responsavel'}
            description={this.convertTime(this.state.region.timestamp)}
            image={meuIcon}
            >
            <View>
              {/* <Text>{this.convertTime(this.state.region.timestamp)}</Text> */}
            </View>
          </Marker>
        </MapView>
      </View>
    );
  }
}

// 'use strict';

// import React from 'react';
// import {StyleSheet, Text, View, Alert} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';

// export default class GeolocationExample extends React.Component<
//   {},
//   $FlowFixMeState,
// > {
//   state = {
//     initialPosition: 'unknown',
//     lastPosition: 'unknown',
//   };

//   watchID: ?number = null;

//   componentDidMount() {
//     Geolocation.getCurrentPosition(
//       position => {
//         const initialPosition = JSON.stringify(position); // converter para json [Object object]
//         this.setState({initialPosition});
//         console.info('=====>>'+ initialPosition);
//       },
//       error => Alert.alert('Error', JSON.stringify(error)),
//       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
//     );
//     this.watchID = Geolocation.watchPosition(position => {
//       const lastPosition = JSON.stringify(position);
//       this.setState({lastPosition});
//     });
//   }

//   componentWillUnmount() {
//     this.watchID != null && Geolocation.clearWatch(this.watchID);
//   }

//   render() {
//     return (
//       <View>
//         <Text>
//           <Text style={styles.title}>Initial position: </Text>
//           {this.state.initialPosition}
//         </Text>
//         <Text>
//           <Text style={styles.title}>Current position: </Text>
//           {this.state.lastPosition}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   title: {
//     fontWeight: '500',
//   },
// });
