import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <Provider createStore={createStore(() => {})}>
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
