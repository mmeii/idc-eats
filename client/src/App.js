import Nav from "./components/Nav";
import axios from "axios";
import Eats from "./pages/Eats";
import Details from "./pages/Details";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Footer from "./components/Footer";

import "./App.css";
import Preferences from "./pages/Preferences";

function App() {
	return (
		<Router>
			<Nav />
			<Switch>
				{/* ADD in after created component={Login} */}
				<Route exact path="/" component={Login} />
				{/*  ADD in after created component={Eats} */}
				<Route exact path="/eats" component={Eats} />
				<Route exact path="/details" component={Details} />
				{/*  ADD in after created component={Preferences} */}
				<Route exact path="/preferences" component={Preferences} />
				{/*  ADD in after created component={Logout} */}
				<Route exact path="/logout" />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
