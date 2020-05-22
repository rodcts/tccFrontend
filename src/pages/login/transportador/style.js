import { StyleSheet } from 'react-native';

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
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    // flex: 1,
    // backgroundColor: 'blue',
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
    opacity: 0.5,

  },
  loginViewButton: {
    // backgroundColor: 'red',
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
    justifyContent: 'center',
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  logo: {
    width: 50,
    height: 50,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
    marginBottom: 30,
    marginLeft: 180,
  },
  containerChangeUser: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  containerChangeUserbtn: {
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: '#3897f1',
    borderRadius: 5,
  },
  logoTextUser: {
    color: '#FFF',
    fontSize: 8,
  },
  backgroundImage: {
    position: 'absolute',
    top: 220,
    left: 0,
    bottom: 0,
    right: 0,
    height: 220,
    opacity: 0.2
  },
});

export default styles;
