import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

const PriceCheckbox = ({ onChange, expense }) => {
	const [checked, setChecked] = React.useState(false);

	const handleChange = event => {
		setChecked(event.target.checked);

		onChange(expense, event.target.checked);
	};

	return (
		<Checkbox
			defaultChecked
			color="primary"
			inputProps={{ "aria-label": "secondary checkbox" }}
			onChange={handleChange}
		/>
	);
};

export default PriceCheckbox;
