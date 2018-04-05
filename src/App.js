import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import Router from './Router';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
};

export default App;
