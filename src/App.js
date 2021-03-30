import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Preferences from "./pages/Preferences";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

const App = () => {
	return (
		<>
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/" component={Login} />
					<PrivateRoute exact path="/home">
						<Home />
					</PrivateRoute>
					<PrivateRoute exact path="/details">
						<Details />
					</PrivateRoute>
					<PrivateRoute exact path="/preferences">
						<Preferences />
					</PrivateRoute>
				</Switch>
			</Router>
			<Footer />
		</>
	);
};

export default App;
