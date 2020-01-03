import React, {Component} from 'react';
import {View, Alert, Text, Image, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

import styles from './style';
import iconResponsavel from '../../../imagem/iconResponsavel/minhaFoto.png';
import iconVeiculo from '../../../imagem/iconVeiculo/iconVeiculo.png';

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
      },
      latitude: 0,
      longitude: 0,
    };
    this.getPrimaryLocation();
    this.getSecondLocation();
    this.watchLocation();

    // Geolocation.getCurrentPosition(info => console.log(info));
  }

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
        this.setState({locResponsavel: initialPosition2});
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

        const loc2 = {
          coords: {
            latitude: 37.7785951,
            longitude: -122.3914585,
          },
        };
        // this.setState({locAluno: secondPosition2});
        this.setState({locAluno: loc2});
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
    return (
      <View>
        {/* <Text>
          Latitude {this.state.latitude} Longitude {this.state.longitude}
        </Text> */}

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
            latitude: this.state.locResponsavel.coords.latitude,
            longitude: this.state.locResponsavel.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          <Marker
            // style={styles.iconMarker}
            coordinate={{
              latitude: this.state.locResponsavel.coords.latitude,
              longitude: this.state.locResponsavel.coords.longitude,
            }}
            // TODO title deverá receber  como parametro o nome de quem esta logado
            title={'Responsavel'}
            description={this.convertTime(this.state.locResponsavel.timestamp)}
            // TODO image deverá receber a imagem do responsavel atual logado
            // image={iconResponsavel} // deprecated
          >
            <View>
              <Image
                style={{borderRadius: 50}}
                source={iconResponsavel}></Image>
            </View>
          </Marker>
          <Marker
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
          </Marker>
        </MapView>
      </View>
    );
  }
}

// import React, {Component} from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Switch,
//   Image,
// } from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import MapView, {Marker} from 'react-native-maps';
// import PubNubReact from 'pubnub-react';
// import Geolocation from '@react-native-community/geolocation';

// type Props = {};
// export default class App extends Component<Props> {
//   constructor(props) {
//     super(props);

//     this.pubnub = new PubNubReact({
//       publishKey: 'pub-c-5f8eac01-4a09-4e37-ac12-bad4bcccb6ac',
//       subscribeKey: 'sub-c-a5c9d49c-29a5-11ea-9e12-76e5f2bf83fc',
//     });

//     //Base State
//     this.state = {
//       currentLoc: {
//         latitude: -1,
//         longitude: -1,
//       },
//       numUsers: 0,
//       fixedOnUUID: '',
//       focusOnMe: false,
//       users: new Map(),
//       isFocused: false,
//       userCount: 0,
//       allowGPS: true,
//       userCount: 0,
//     };

//     this.pubnub.init(this);
//   }

//   async componentDidMount() {
//     this.setUpApp();
//   }

//   focusLoc = () => {
//     if (this.state.focusOnMe || this.state.fixedOnUUID) {
//       this.setState({
//         focusOnMe: false,
//         fixedOnUUID: '',
//       });
//     } else {
//       region = {
//         latitude: this.state.currentLoc.latitude,
//         longitude: this.state.currentLoc.longitude,
//         latitudeDelta: 0.01,
//         longitudeDelta: 0.01,
//       };
//       this.setState({
//         focusOnMe: true,
//       });
//       this.map.animateToRegion(region, 2000);
//     }
//   };

//   toggleGPS = () => {
//     this.setState({
//       allowGPS: !this.state.allowGPS,
//     });
//   };

//   async setUpApp() {
//     this.pubnub.getMessage('global', msg => {
//       let users = this.state.users;
//       if (msg.message.hideUser) {
//         users.delete(msg.publisher);
//         this.setState({
//           users,
//         });
//       } else {
//         coord = [msg.message.latitude, msg.message.longitude]; //Format GPS Coordinates for Payload

//         let oldUser = this.state.users.get(msg.publisher);

//         let newUser = {
//           uuid: msg.publisher,
//           latitude: msg.message.latitude,
//           longitude: msg.message.longitude,
//         };

//         if (msg.message.message) {
//           Timeout.set(msg.publisher, this.clearMessage, 5000, msg.publisher);
//           newUser.message = msg.message.message;
//         } else if (oldUser) {
//           newUser.message = oldUser.message;
//         }
//         this.updateUserCount();
//         users.set(newUser.uuid, newUser);
//         this.setState({
//           users,
//         });
//       }
//     });

//     this.pubnub.subscribe({
//       channels: ['global'],
//       withPresence: true,
//     });
//   }
//   //Get Stationary Coordinate
//   getLocation1() {
//     Geolocation.getCurrentPosition(
//       position => {
//         if (this.state.allowGPS) {
//           this.pubnub.publish({
//             message: {
//               latitude: position.coords.latitude,
//               longitude: position.coords.longitude,
//             },
//             channel: 'global',
//           });
//           let users = this.state.users;
//           let tempUser = {
//             uuid: this.pubnub.getUUID(),
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           };
//           users.set(tempUser.uuid, tempUser);
//           this.setState({
//             users,
//             currentLoc: position.coords,
//           });
//         }
//       },
//       error => console.log('Maps Error: ', error),
//       {enableHighAccuracy: true},
//     );
//   }

//   getWatchPosition() {
//     //Track motional Coordinates
//     Geolocation.watchPosition(
//       position => {
//         this.setState({
//           currentLoc: position.coords,
//         });
//         if (this.state.allowGPS) {
//           this.pubnub.publish({
//             message: {
//               latitude: position.coords.latitude,
//               longitude: position.coords.longitude,
//             },
//             channel: 'global',
//           });
//         }
//         console.log(positon.coords);
//       },
//       error => console.log('Maps Error: ', error),
//       {enableHighAccuracy: true, distanceFilter: 100},
//     );
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.allowGPS != this.state.allowGPS) {
//       //check whether the user just toggled their GPS settings
//       if (this.state.allowGPS) {
//         //if user toggled to show their GPS data
//         if (this.state.focusOnMe) {
//           //if user toggled to focus map view on themselves
//           this.animateToCurrent(this.state.currentLoc, 1000);
//         }
//         let users = this.state.users;
//         let tempUser = {
//           uuid: this.pubnub.getUUID(),
//           latitude: this.state.currentLoc.latitude,
//           longitude: this.state.currentLoc.longitude,
//           image: this.state.currentPicture,
//           username: this.state.username,
//         };
//         users.set(tempUser.uuid, tempUser);
//         this.setState(
//           {
//             users,
//           },
//           () => {
//             this.pubnub.publish({
//               message: tempUser,
//               channel: 'global',
//             });
//           },
//         );
//       } else {
//         //if user toggled to hide their GPS data
//         let users = this.state.users;
//         let uuid = this.pubnub.getUUID();

//         users.delete(uuid);
//         this.setState({
//           users,
//         });
//         this.pubnub.publish({
//           message: {
//             hideUser: true,
//           },
//           channel: 'global',
//         });
//       }
//     }
//   }

//   updateUserCount = () => {
//     var presenceUsers = 0;
//     this.pubnub.hereNow(
//       {
//         includeUUIDs: true,
//         includeState: true,
//       },
//       function(status, response) {
//         // handle status, response
//         presenceUsers = response.totalOccupancy;
//       },
//     );
//     var totalUsers = Math.max(presenceUsers, this.state.users.size);
//     this.setState({userCount: totalUsers});
//   };

//   animateToCurrent = (coords, speed) => {
//     region = {
//       latitude: coords.latitude,
//       longitude: coords.longitude,
//       latitudeDelta: 0.01,
//       longitudeDelta: 0.01,
//     };
//     this.map.animateToRegion(region, speed);
//   };

//   render() {
//     let usersArray = Array.from(this.state.users.values());
//     return (
//       <View style={styles.container}>
//         <MapView
//           style={styles.map}
//           ref={ref => (this.map = ref)}
//           onMoveShouldSetResponder={this.draggedMap}
//           showsUserLocation={true}
//           showsMyLocationButton={true}
//           showsPointsOfInterest={true}
//           showsCompass={true}
//           minZoomLevel={0}
//           maxZoomLevel={20}
//           initialRegion={{
//             latitude: 37.7785951,
//             longitude: -122.3914585,
//             latitudeDelta: 1,
//             longitudeDelta: 1,
//           }}>
//           {console.log('users: ', this.state.users.values())}
//           {usersArray.map(item => (
//             <Marker
//               style={styles.marker}
//               key={item.uuid}
//               coordinate={{
//                 latitude: item.latitude,
//                 longitude: item.longitude,
//               }}
//               ref={marker => {
//                 this.marker = marker;
//               }}>
//               <Image
//                 style={styles.profile}
//                 source={require('../../imagem/iconVeiculo/iconVeiculo.png')}
//               />
//             </Marker>
//           ))}
//         </MapView>

//         <View style={styles.topBar}>
//           <View style={styles.leftBar}>
//             <View style={styles.userCount}>
//               <Text>{this.state.userCount}</Text>
//             </View>
//           </View>
//         </View>

//         <View style={styles.topBar}>
//           <View style={styles.rightBar}>
//             <Switch
//               value={this.state.allowGPS}
//               style={styles.locationSwitch}
//               onValueChange={this.toggleGPS}
//             />
//           </View>
//         </View>

//         <View style={styles.bottom}>
//           <View style={styles.bottomRow}>
//             <TouchableOpacity onPress={this.focusLoc}>
//               <Image
//                 style={styles.focusLoc}
//                 source={require('../../imagem/iconVeiculo/iconVeiculo.png')}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   bottomRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   marker: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: Platform.OS === 'android' ? 100 : 0,
//   },
//   topBar: {
//     top: Platform.OS === 'android' ? hp('2%') : hp('5%'),

//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginHorizontal: wp('2%'),
//   },
//   rightBar: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   leftBar: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   locationSwitch: {
//     left: 300,
//   },
//   container: {
//     flex: 1,
//   },
//   bottom: {
//     position: 'absolute',
//     flexDirection: 'column',
//     bottom: 0,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     width: '100%',
//     marginBottom: hp('4%'),
//   },
//   focusLoc: {
//     width: hp('4.5%'),
//     height: hp('4.5%'),
//     marginRight: wp('2%'),
//     left: 15,
//   },
//   userCount: {
//     marginHorizontal: 10,
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   profile: {
//     width: hp('4.5%'),
//     height: hp('4.5%'),
//   },
// });
