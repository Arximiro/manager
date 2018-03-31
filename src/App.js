import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import reducers from './reducers';

class App extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyCb3jUSdWFq9JdjWat_CZqwXj3SYOejijE",
      authDomain: "manager-b6600.firebaseapp.com",
      databaseURL: "https://manager-b6600.firebaseio.com",
      projectId: "manager-b6600",
      storageBucket: "manager-b6600.appspot.com",
      messagingSenderId: "309644073515"
    };

    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider createStore={createStore(reducers)}>
        <View>
          <Text>
            Hello from React Native!
          </Text>
        </View>
      </Provider>
    );
  }
};

export default App;
