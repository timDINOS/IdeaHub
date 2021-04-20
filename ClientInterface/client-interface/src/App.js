import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setToken from "./serverAuth/token";

import { setUser, userLogout } from "./actions/authenticationActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/PageDesigns/menuBar";
import Landing from "./components/PageDesigns/LandingPage";
import Register from "./components/UserAuthentication/Register";
import Login from "./components/UserAuthentication/Login";
import Private from "./components/Private/route";
import Dashboard from "./components/Dashboard/dashboard";

import "./App.css";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setUser(decoded));
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    store.dispatch(userLogout());

    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Login" component={Login} />
            <Switch>
              <Private exact path="/Dashboard" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;