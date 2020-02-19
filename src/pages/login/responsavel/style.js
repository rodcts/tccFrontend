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
    // flex: 1,
    // backgroundColor: 'red',
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
    // flex:1,
    // backgroundColor: 'green',
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
    // marginTop: 25,
    paddingTop: 30,
    // backgroundColor: 'yellow',
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
  // container: {
  //   backgroundColor: theme.COLORS.BLACK,
  //   marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  // },
  // padded: {
  //   paddingHorizontal: theme.SIZES.BASE * 2,
  //   zIndex: 3,
  //   position: 'absolute',
  //   bottom:
  //     Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3,
  // },
  // button: {
  //   width: width - theme.SIZES.BASE * 4,
  //   height: theme.SIZES.BASE * 3,
  //   shadowRadius: 0,
  //   shadowOpacity: 0,
  // },
  // pro: {
  //   backgroundColor: materialTheme.COLORS.LABEL,
  //   paddingHorizontal: 8,
  //   marginLeft: 12,
  //   borderRadius: 2,
  //   height: 22,
  // },
  // gradient: {
  //   zIndex: 1,
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   height: 66,
  // },
});

export default styles;
