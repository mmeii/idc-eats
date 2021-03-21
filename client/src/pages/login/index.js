import React, { useState } from "react";
import axios from "axios";
import Motion from "../../components/Motion"
import './style.css';

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
		<div id="login">
			<Motion />
			<form onSubmit={event => handleSubmit(event)}>
				<input
					id="username"
					label="username"
					value={username}
					onChange={({ target: { value } }) => setUsername(value)}
				/>
				<input
					id="password"
					label="password"
					value={password}
					onChange={({ target: { value } }) => setPassword(value)}
				/>
				<button variant="contained" color="secondary" type="submit">
					Login
				</button>
			</form>
			<div id="googlelogin">
			<h1>Login with Google</h1>
			<a href="/auth/google">
				<i class="fab fa-google"></i>
			</a>
			</div>
		</div>
	);
}

export default Login;
