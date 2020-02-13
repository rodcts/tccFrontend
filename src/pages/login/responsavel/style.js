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
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: '#3897f1',
    borderRadius: 5,
    height: 45,
    marginTop: 10,

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
    marginTop: 25,
  },
  containerChangeUserbtn: {
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: '#3897f1',
    borderRadius: 5,

  },
  logoTextUser: {
    color: '#000',
    fontSize: 8
    
  },


});


export default styles;