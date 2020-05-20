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
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
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
    borderRadius: 5,
  },
  logoTextUser: {
    color: '#000',
    fontSize: 8,
  },
});

export default styles;
