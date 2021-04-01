import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "../Btn";
import { Formik, Form } from "formik";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#D92B04',
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
							onChange={handleChange}
						/>
						<FormControlLabel
							value="2"
							control={<Checkbox color="primary" />}
							label="$$"
							name="$$"
							labelPlacement="end"
							onChange={handleChange}
						/>
						<FormControlLabel
							value="3"
							control={<Checkbox color="primary" />}
							label="$$$"
							name="$$$"
							labelPlacement="end"
							onChange={handleChange}
						/>
						<FormControlLabel
							value="4"
							control={<Checkbox color="primary" />}
							label="$$$$"
							name="$$$$"
							labelPlacement="end"
							onChange={handleChange}
						/>
						<div className="priceSubmit">
							<Button
								label={"Find a restaurant!"}
								type="submit"
							/>
						</div>
					</Form>
				)}
			</Formik>
		</ThemeProvider>
	);
};

export default PriceForm;
