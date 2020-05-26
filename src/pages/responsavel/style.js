import { StyleSheet, Dimensions } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  btnView: {
    position: 'absolute',
    height: 100,
    width: '100%',
    margin: 0,
    padding: 0,
  },
  btn: {
    backgroundColor: 'white',
    width: '100%',
    margin: 0,
    justifyContent: 'center',
    alignContent: 'center',
    opacity: 0.5,

  },
});

export default style;
