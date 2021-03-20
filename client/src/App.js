import Nav from "./components/Nav";
import Eats from "./pages/Eats";
import Details from "./pages/Details";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";

import "./App.css";

function App() {
	const [coords, setCoords] = useState({});

	useEffect(() => {
		fetchCoords();
	}, []);

	useEffect(() => {
		console.log(coords);
	}, [coords]);

	const fetchCoords = () => {
		navigator.geolocation.getCurrentPosition(res => {
			setCoords({
				latitude: res.coords.latitude,
				longitude: res.coords.longitude,
			});
		});
	};

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
				<Route exact path="/preferences" />
				{/*  ADD in after created component={Logout} */}
				<Route exact path="/logout" />
			</Switch>
		</Router>
	);
}

export default App;
