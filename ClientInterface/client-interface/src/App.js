import logo from './logo.svg';
import './App.css';

import {Provider } from "react-redux";
import { Component } from 'react';

var maintainLogin = function(localStorage) {
  if (localStorage.jwtToken) {
    var token = localStorage.jwtToken;
    setAuthToken(token);
    var decoded_token = jwt_token(token);

    //Update with action and design objects
    const time = Date.now() / 1000;
    if (time > decoded_token.exp) {
      return;
    }
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
