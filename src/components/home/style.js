import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInput: {
    marginTop: 500,
    marginLeft: 30,
    marginRight: 30,
  },
  textInput: {
    width: '100%',
    height: 50,
    fontSize: 16,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    padding: 5,
    marginTop: 20,
  },
  containerBtn: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#5DBCD2',
    // borderRadius: 10,
  },
  textBtn: {
    color: '#fff',
  },
});

export default styles;
