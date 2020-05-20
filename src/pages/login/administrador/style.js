import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //   },
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
 
  loginFormView: {
    paddingTop: 30,
    paddingBottom: 30,
  },

  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    margin: 15,
    padding: 5,
  },
  loginViewButton: {
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  loginButton: {
    backgroundColor: '#2c6d6a',
    borderRadius: 5,
    height: 50,
    width: 250,
    shadowRadius: 0,
    shadowOpacity: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
 
  logo: {
    width: 110,
    height: 70,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 130,
    marginBottom: 30,
    marginLeft: 140,
    resizeMode: 'contain',
  },
});

export default styles;
