import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Login from "./pages/Login";
import Eats from "./pages/Eats";
import Details from "./pages/Details";
import Preferences from "./pages/Preferences";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./utils/AuthState";

import "./App.css";

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/" component={Login} />
					<PrivateRoute exact path="/eats"><Eats /></PrivateRoute>
					<PrivateRoute exact path="/details"><Details /></PrivateRoute>
					<PrivateRoute exact path="/preferences"><Preferences /></PrivateRoute>
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;
