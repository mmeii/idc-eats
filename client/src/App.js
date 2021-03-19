import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Eats from './pages/Eats';
// import Login from './pages/Login';


import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        {/* ADD in after created component={Login} */}
        <Route exact path="/" />
        {/*  ADD in after created component={Eats} */}
        <Route exact path="/eats" component={Eats} />
        {/*  ADD in after created component={Preferences} */}
        <Route exact path="/preferences" />
        {/*  ADD in after created component={Logout} */}
        <Route exact path="/logout" />
      </Switch>
    </Router>
  );
}


export default App;
