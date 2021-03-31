import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "../Btn";

import { makeStyles } from "@material-ui/core/styles";

import "./style.css";

const useStyles = makeStyles({
	error: {
		color: "red",
		fontSize: "14px",
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
}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const classes = useStyles();

	return (
		<form id="loginForm" action={action} method={method}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
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
						onClick={() => handleSubmit(username, password)}
					/>
				</Grid>
				<Grid item xs={12}>
					{message ? (
						<Typography className={classes.error}>{message.message}</Typography>
					) : null}
				</Grid>
				<Grid item xs={12}>
					<Typography className={classes.text} onClick={handleToggle}>
						{text}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Grid container>
						<Grid item xs={12}>
							<h2>Login with Google</h2>
						</Grid>
						<Grid item xs={12} align="center">
							<a href="/auth/google">
								<i className="fab fa-google"></i>
							</a>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</form>
	);
};

export default AuthForm;
