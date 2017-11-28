import React, { Component } from 'react';

import {
  StyleSheet,
  Button,
  AsyncStorage,
  TouchableHighlight,
  AppRegistry, 
  Text, 
  TextInput, 
  View
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

class ShowTravelsView extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

// https://my.api.mockaroo.com/travels.json?key=ff8bc390 -> url do mock JSON
// http://www.mockaroo.com/virtual_services/913 -> info

  _test = () => {
    alert(this.props.navigation.state.params._from)
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <Text style={{fontSize:20}}>
        Show Travels!
       </Text>
      <TouchableHighlight onPress={this._test}>
        <Text style={styles.button}>Testing sending parameters...</Text>
      </TouchableHighlight>
      </View>
    )
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#789fbb'
    },
    title: {
      color: '#fff',
      fontSize: 50,
      textAlign: 'center'
    },
    text: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 10
    },
    button: {
      borderRadius: 4,
      padding: 20,
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 20,
      color: '#fff',
      backgroundColor: '#1e698d'
    }
  })

module.exports = ShowTravelsView
