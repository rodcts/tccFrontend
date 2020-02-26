import React, {Component} from 'react';
import {View} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';

export default class Header extends Component {
  render() {
    return (
      <View style={{margin: 20,paddingTop: 10, paddingBottom: 20, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#A9A9A9'}}>
        <Avatar
          size="xlarge"
          rounded
          title="CR"
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
        <View style={{marginTop: 50, padding: 10, flex: 1}}>
          <ListItem></ListItem>
        </View>
      </View>
    );
  }
}
