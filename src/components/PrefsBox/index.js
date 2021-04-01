import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Btn from "../Btn";
import { Formik, Form } from "formik";
//import "./style.css";

const PrefsBox = ({ handleSubmit }) => {
	return (
		<Formik
			initialValues={{ 
                GlutenFree: "", Kosher: "", Raw: "", Vegan: "", Vegetarian: "", Halal: "",
                Asian: "", American: "", Italian: "", Indian: "", Mexican: "", Ethiopian: "",
                French: "", Mediterranean: "", MidEast: "", Somali: "", Spanish: "", Pizza: "" }}
			onSubmit={formData => {
				handleSubmit(formData);
			}}
		>
			{({ handleChange }) => (
				<Form>
                    <p>Please select one Dietary Concern: </p>
					<FormControlLabel
						value="Gluten Free"
						control={<Checkbox color="primary" />}
						label="Gluten Free"
						labelPlacement="end"
						name="Gluten Free"
						onChange={handleChange}
					/>
					<FormControlLabel
						value="Kosher"
						control={<Checkbox color="primary" />}
						label="Kosher"
						name="Kosher"
						labelPlacement="end"
						onChange={handleChange}
					/>
					<FormControlLabel
						value="Raw Food"
						control={<Checkbox color="primary" />}
						label="Raw Food"
						name="Raw Food"
						labelPlacement="end"
						onChange={handleChange}
					/>
					<FormControlLabel
						value="Vegan"
						control={<Checkbox color="primary" />}
						label="Vegan"
						name="Vegan"
						labelPlacement="end"
						onChange={handleChange}
					/>
                    <FormControlLabel
						value="Vegetarian"
						control={<Checkbox color="primary" />}
						label="Vegetarian"
						name="Vegetarian"
						labelPlacement="end"
						onChange={handleChange}
					/>
                    <FormControlLabel
						value="Halal"
						control={<Checkbox color="primary" />}
						label="Halal"
						name="Halal"
						labelPlacement="end"
						onChange={handleChange}
					/>
					
                    <p>Please select your Cuisine Preferences: </p>

                    <FormControlLabel
						value="Asian"
						control={<Checkbox color="primary" />}
						label="Asian"
						labelPlacement="end"
						name="Asian"
						onChange={handleChange}
					/>
					<FormControlLabel
						value="American"
						control={<Checkbox color="primary" />}
						label="American"
						name="American"
						labelPlacement="end"
						onChange={handleChange}
					/>
					<FormControlLabel
						value="Italian"
						control={<Checkbox color="primary" />}
						label="Italian"
						name="Italian"
						labelPlacement="end"
						onChange={handleChange}
					/>
					<FormControlLabel
						value="Indian"
						control={<Checkbox color="primary" />}
						label="Indian"
						name="Indian"
						labelPlacement="end"
						onChange={handleChange}
					/>
                    <FormControlLabel
						value="Mexican"
						control={<Checkbox color="primary" />}
						label="Mexican"
						name="Mexican"
						labelPlacement="end"
						onChange={handleChange}
					/>
                    <FormControlLabel
						value="Ethiopian"
						control={<Checkbox color="primary" />}
						label="Ethiopian"
						name="Ethiopian"
						labelPlacement="end"
						onChange={handleChange}
					/>
                    <FormControlLabel
						value="French"
						control={<Checkbox color="primary" />}
						label="French"
						labelPlacement="end"
						name="French"
						onChange={handleChange}
					/>
					<FormControlLabel
						value="Mediterranean"
						control={<Checkbox color="primary" />}
						label="Mediterranean"
						name="Mediterranean"
						labelPlacement="end"
						onChange={handleChange}
					/>
					<FormControlLabel
						value="Middle Eastern"
						control={<Checkbox color="primary" />}
						label="Middle Eastern"
						name="Middle Eastern"
						labelPlacement="end"
						onChange={handleChange}
					/>
					<FormControlLabel
						value="Somali"
						control={<Checkbox color="primary" />}
						label="Somali"
						name="Somali"
						labelPlacement="end"
						onChange={handleChange}
					/>
                    <FormControlLabel
						value="Spanish"
						control={<Checkbox color="primary" />}
						label="Spanish"
						name="Spanish"
						labelPlacement="end"
						onChange={handleChange}
					/>
                    <FormControlLabel
						value="Pizza"
						control={<Checkbox color="primary" />}
						label="Pizza"
						name="Pizza"
						labelPlacement="end"
						onChange={handleChange}
					/>
                    <div>
					<Btn label={"Save Preferences"} type="submit" />
					</div>
				</Form>
			)}
		</Formik>
	);
};

export default PrefsBox;