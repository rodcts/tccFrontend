import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#eaeaea',
  },

  flatlist: { height: 660 },

  flatlistcontainer: { borderRadius: 10 },

  listtitle: { backgroundColor: '#eaeaea', padding: 10, marginTop: 10 },

  listinputtext: { backgroundColor: '#FFFFFF', margin: 5 },

  btnfooter: {
    height: 100,
    padding: 10,
    marginTop: 5,
    backgroundColor: '#eaeaea',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 3,
  },

  load: {
    marginTop: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
