import React, { Component } from "react";
import "./App.css";

// State Management
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { smurfReducer } from '../reducers/SmurfReducer';
import { Provider } from 'react-redux';

// Components
import Smurfs from './Smurfs';
import SmurfForm from "./SmurfForm";

// Styles
import AppHeader from './styles/AppHeader';
import AppWrapper from "./styles/AppWrapper";


const store = createStore(smurfReducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <AppHeader>
            <h1>SMURFS! 2.0 W/ Redux</h1>
            <div>Welcome to your state management version of Smurfs!</div>
            <div>Have fun!</div>
          </AppHeader>
          <AppWrapper className="App">
          <Smurfs />
          <SmurfForm />
        </AppWrapper>
      </Provider>
    );
  }
}

export default App;
