import React from "react";
import Button from "@material-ui/core/Button";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
	palette: {
		primary: {
			// light: will be calculated from palette.primary.main,
			main: "#4E9DA6",
			// dark: will be calculated from palette.primary.main,
			// contrastText: will be calculated to contrast with palette.primary.main
		},
		secondary: {
			main: "#F25C05",
		},
		// Used by `getContrastText()` to maximize the contrast between
		// the background and the text.
		contrastThreshold: 3,
		// Used by the functions below to shift a color's luminance by approximately
		// two indexes within its tonal palette.
		// E.g., shift from Red 500 to Red 300 or Red 700.
		tonalOffset: 0.2,
	},
});

const useStyles = makeStyles({
	loginButton: {
		width: "100%",
	},
});

function Btn(props) {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<Button
				className={classes[props.className]}
				variant="contained"
				color="primary"
				aria-label="button"
				onClick={props.onClick}
				type={props.type}
			>
				{props.label}
			</Button>
		</ThemeProvider>
	);
}

export default Btn;
