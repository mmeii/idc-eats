import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

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
		<div>
			<motion.div animate={{ scale: 2 }} transition={{ duration: 0.5 }} />
			<img src="" alt="idc-eats logo" />
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
			<h1>Login with Google</h1>
			<a href="/auth/google">
				<i class="fab fa-google"></i>
			</a>
		</div>
	);
=======
    const handleClick = (event) => {

    };
    return (

        <div>
            <motion.div
                animate={{ scale: 2 }}
                transition={{ duration: 0.5 }}
            />
            <img src={`${process.env.PUBLIC_URL}/assets/logo.jpg`} alt="idc-eats logo" />
            <form>
                <input id="email" label="email" />
                <input id="password" label="password" />
                <button variant="contained" color="secondary" onClick={handleClick}>Login</button>
            </form>
            <h1>Login with Google</h1>
            <i class="fab fa-google" onClick={handleClick}></i>
        </div>
    )

}

export default Login;
