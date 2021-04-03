import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "../Btn";

import { makeStyles } from "@material-ui/core/styles";

import "./style.css";

const useStyles = makeStyles({
	error: {
		color: "red",
		fontSize: "12px",
	},
	text: {
		color: "#D92B04",
		cursor: "pointer",
		transition: "transform 500ms",
		"&:hover": {
			transform: "scale(1.05)",
			fontWeight: "bold",
		},
	},
});

const AuthForm = ({
	buttonText,
	action,
	method,
	handleSubmit,
	handleToggle,
	text,
	type,
}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [valMessage, setValMessage] = useState("");
	const classes = useStyles();

	const handleClick = e => {
		if (type === "signup") {
			e.preventDefault();
			setValMessage("");
			if (username.length < 6) {
				setValMessage("Username must be greater than 6 characters");
			} else if (password.length < 6) {
				setValMessage("Password must be greater than 6 characters");
			} else if ((password.match(/[!@#$%^&*()-_=+]/g) || []).length < 1) {
				setValMessage("Password must contain at least 1 special characters");
			} else if ((password.match(/[A-Za-z]/g) || []).length < 2) {
				setValMessage(
					"Password must contain at least 2 alphabetical characters"
				);
			} else if ((password.match(/\d/g) || []).length < 1) {
				setValMessage("Password must contain at least 1 numerical characters");
			} else {
				handleSubmit(username, password);
			}
		}
	};

	return (
		<form id="loginForm" action={action} method={method}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						size="small"
						value={username}
						label="Username"
						variant="outlined"
						type="text"
						name="username"
						autoComplete="off"
						autoCorrect="off"
						autoCapitalize="off"
						onChange={({ target: { value } }) => setUsername(value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						size="small"
						value={password}
						label="Password"
						variant="outlined"
						type="password"
						name="password"
						autoComplete="off"
						autoCorrect="off"
						autoCapitalize="off"
						onChange={({ target: { value } }) => setPassword(value)}
					/>
				</Grid>
				<Grid item xs={12}>
					<Button
						className="loginButton"
						label={buttonText}
						type="submit"
						onClick={e => handleClick(e)}
					/>
				</Grid>
				<h6 id="errorMsg">{message && !valMessage ? (
					<Typography className={classes.error}>{message.message}</Typography>
				) : null}
					{valMessage ? (
						<Typography className={classes.error}>{valMessage}</Typography>
					) : null}
				</h6>
				<Grid item xs={12}>
					<Typography className={classes.text} onClick={handleToggle}>
						{text}
					</Typography>
				</Grid>
				<p id="or">OR</p>
				<Grid item xs={12} align="center">
					<Button
						className="loginButton"
						label="Login with Google"
						onClick={() => { window.location.href = "/auth/google" }}
					/>
				</Grid>
			</Grid>
		</form>
	);
};

export default AuthForm;
