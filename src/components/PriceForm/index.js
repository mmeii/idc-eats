import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "../Btn";
import { Formik, Form } from "formik";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#4E9DA6',
		},
	},
});

const PriceForm = ({ handleSubmit }) => {
	return (
		<ThemeProvider theme={theme}>
			<Formik
				initialValues={{ $: "", $$: "", $$$: "", $$$$: "" }}
				onSubmit={formData => {
					handleSubmit(formData);
				}}
			>
				{({ handleChange }) => (
					<Form>
						<FormControlLabel
							value="1"
							control={<Checkbox color="primary" />}
							label="$"
							labelPlacement="end"
							name="$"
							aria-label="One"
							onChange={handleChange}
						/>
						<FormControlLabel
							value="2"
							control={<Checkbox color="primary" />}
							label="$$"
							name="$$"
							aria-label="Two"
							labelPlacement="end"
							onChange={handleChange}
						/>
						<FormControlLabel
							value="3"
							control={<Checkbox color="primary" />}
							label="$$$"
							name="$$$"
							aria-label="Three"
							labelPlacement="end"
							onChange={handleChange}
						/>
						<FormControlLabel
							value="4"
							control={<Checkbox color="primary" />}
							label="$$$$"
							name="$$$$"
							aria-label="Four"
							labelPlacement="end"
							onChange={handleChange}
						/>
						<div className="priceSubmit">
							<Button
								label={"Find a restaurant!"}
								type="submit"
								aria-label="submit"
							/>
						</div>
					</Form>
				)}
			</Formik>
		</ThemeProvider>
	);
};

export default PriceForm;
