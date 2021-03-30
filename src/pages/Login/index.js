import React, { useState } from "react";
import axios from "axios";
import Motion from "../../components/Motion";
import { makeStyles } from "@material-ui/core/styles";
import Btn from "../../components/Btn";
import ContainerWrapper from "../../components/ContainerWrapper";
import "./style.css";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = event => {
		event.preventDefault();
		const credentials = { username, password };
		axios.post("/auth/signup", credentials);
		setUsername("");
		setPassword("");
	};

	return (
		<ContainerWrapper>
			<Motion />
			<h4>The app that picks where to eat so you don't have to</h4>
			<h5>
				Saving marriages and friendships from food-related arguments one click
				at a time
			</h5>
			<form action="/auth/signin" method="POST" id="loginForm">
				<input
					id="username"
					label="username"
					name="username"
					value={username}
					onChange={({ target: { value } }) => setUsername(value)}
					placeholder="username"
				/>
				<input
					id="password"
					label="password"
					name="password"
					value={password}
					onChange={({ target: { value } }) => setPassword(value)}
					placeholder="password"
				/>
				<Btn type="submit" label="Login" id="loginbtn"></Btn>
				<p>Don't have an account? Make one!</p>
				<Btn label="Create Account" id="createbtn" onClick={handleSubmit}></Btn>
				<div id="googlelogin">
					<h2>Login with Google</h2><a href="/auth/google"><i className="fab fa-google"></i></a>
				</div>
			</form>
			<h2>i don't care. you pick.</h2>

		</ContainerWrapper>
	);
}

export default Login;
