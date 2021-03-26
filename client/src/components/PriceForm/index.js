import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "../Btn";
import { Formik, Form } from "formik";

const PriceForm = ({ handleSubmit }) => {
	return (
		<Formik
			initialValues={{ $: "", $$: "", $$$: "", $$$$: "" }}
			onSubmit={formData => {
				console.log(formData);
				handleSubmit(formData);
			}}
		>
			{({ handleChange }) => (
				<Form>
					<FormControlLabel
						value="1"
						control={<Checkbox />}
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
					<Button label={"Rando"} type="submit" />
				</Form>
			)}
		</Formik>
	);
};

export default PriceForm;
