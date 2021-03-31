import React, { useState } from "react";
import axios from "axios";

import Motion from "../../components/Motion";
import ContainerWrapper from "../../components/ContainerWrapper";
import AuthForm from "../../components/AuthForm";
import "./style.css";

function Login() {
	const [toggle, setToggle] = useState(true);

	const handleSubmit = async (username, password) => {
		event.preventDefault();
		const credentials = { username, password };
		await axios.post("/auth/signup", credentials);
		window.location = "/home";
	};

	return (
		<ContainerWrapper>
			<Motion />
			<h4>The app that picks where to eat so you don't have to</h4>
			<h5>
				Saving marriages and friendships from food-related arguments one click
				at a time
			</h5>
			{toggle ? (
				<AuthForm
					buttonText="Login"
					action="/auth/signin"
					method="POST"
					text={"Don't have an account yet? Sign up!"}
					handleToggle={() => setToggle(!toggle)}
				/>
			) : (
				<AuthForm
					buttonText="Register"
					handleSubmit={handleSubmit}
					text={"Already have an account? Sign in!"}
					handleToggle={() => setToggle(!toggle)}
				/>
			)}
			<h2>i don't care. you pick.</h2>
		</ContainerWrapper>
	);
}

export default Login;
