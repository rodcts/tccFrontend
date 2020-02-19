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
    // flex: 1,
    // backgroundColor: 'green',
    paddingTop: 30,
    paddingBottom: 30,

  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    // backgroundColor: '#fafafa',
    margin: 15,
    padding: 5,

  },
  loginViewButton: {
    // backgroundColor: 'red',
    alignContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    shadowRadius: 0,
    shadowOpacity: 0,
    // color: '#000',
    
  },
  // fbLoginButton: {
  //   height: 45,
  //   marginTop: 10,
  //   backgroundColor: 'transparent',
  // },
  logo: {
    // width: 50,
    height: 40,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
    marginBottom: 30,
    marginLeft: 40,
    resizeMode: 'contain',
  },
});

export default styles;
