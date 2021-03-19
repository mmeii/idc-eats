import React, { Component } from "react";
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        {/* ADD in after created component={Login} */}
        <Route exact path="/login" />
        {/*  ADD in after created component={Eats} */}
        <Route exact path="/eats" />
        {/*  ADD in after created component={Preferences} */}
        <Route exact path="/preferences" />
        {/*  ADD in after created component={Logout} */}
        <Route exact path="/logout" />
      </Switch>
    </Router>
  );
}


export default App;
