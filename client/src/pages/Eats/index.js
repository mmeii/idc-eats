import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PriceCheckbox from "../../components/PriceCheckbox";
import { makeStyles } from "@material-ui/core/styles";
import Btn from "../../components/Btn";
import ContainerWrapper from "../../components/ContainerWrapper";
import Checkbox from "@material-ui/core/Checkbox";
import "./style.css";
import RandoAnim from "../../components/RandoAnim";
import axios from "axios";

const useStyles = makeStyles(theme => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
		},
	},
}));

export default function Eats() {
	const classes = useStyles();
	const [checkBoxOne, setCheckBoxOne] = React.useState(false);
	const [checkBoxTwo, setCheckBoxTwo] = React.useState(false);
	const [checkBoxThree, setCheckBoxThree] = React.useState(false);
	const [checkBoxFour, setCheckBoxFour] = React.useState(false);
	// const [showDetails, setShowDetails] = useState(false);
	const [coords, setCoords] = useState();
	const [restaurant, setRestaurant] = useState({});
	const [priceOptions, setPriceOptions] = useState([]);

	//yelp get route basing on lat and long
	useEffect(() => {
		fetchCoords();
	}, []);

	// useEffect(() => {
	//     if (coords) {
	//         axios.get(`/api/restaurants/${coords.latitude}/${coords.longitude}`);
	//     }
	// }, [coords]);

	const fetchCoords = () => {
		navigator.geolocation.getCurrentPosition(res => {
			setCoords({
				latitude: res.coords.latitude,
				longitude: res.coords.longitude,
			});
		});
	};

	const onClick = () => {
		// setShowDetails(true);
		// console.log(coords);

		if (coords) {
			axios
				.get(
					`/api/restaurants/${coords.latitude}/${coords.longitude}?price=${priceOptions}`
				)
				// .then(res => res.json())
				.then(result => {
					// console.log(result);
					setRestaurant(result.data);
				})
				.catch(err => console.log(err));
		} else {
			console.log("cannot get coords");
		}
	};

	console.log(restaurant);
	console.log(restaurant.image_url);
	// open: is_closed
	// restaurant name: name
	// image: image_url
	// rating: rating
	// location: location.display_address
	// phone: phone

	const RestaurantDetails = () => (
		<div className="oneRestaurant">
			<div>
				<img src={restaurant.image_url} alt="restaurant" />
			</div>

			<div className={classes.root}>
				<Btn
					variant="contained"
					color="primary"
					onClick={onClick}
					label="Rando"
				/>

				<Link to="details">
					<Btn label="More Info" />
				</Link>
			</div>
		</div>
	);

	const handleChange = expense => {
		switch (expense) {
			case "$":
				setCheckBoxOne(!checkBoxOne);

				break;
			case "$$":
				setCheckBoxTwo(!checkBoxTwo);

				break;
			case "$$$":
				setCheckBoxThree(!checkBoxThree);

				break;
			case "$$$$":
				setCheckBoxFour(!checkBoxFour);

				break;
		}
	};

	useEffect(() => {
		if (checkBoxOne) {
			setPriceOptions([...priceOptions, "1"]);
		} else {
			const filteredPrices = priceOptions.filter(option => option !== "1");
			setPriceOptions(filteredPrices);
		}
	}, [checkBoxOne]);

	useEffect(() => {
		if (checkBoxTwo) {
			setPriceOptions([...priceOptions, "2"]);
		} else {
			const filteredPrices = priceOptions.filter(option => option !== "2");
			setPriceOptions(filteredPrices);
		}
	}, [checkBoxTwo]);

	useEffect(() => {
		if (checkBoxThree) {
			setPriceOptions([...priceOptions, "3"]);
		} else {
			const filteredPrices = priceOptions.filter(option => option !== "3");
			setPriceOptions(filteredPrices);
		}
	}, [checkBoxThree]);

	useEffect(() => {
		if (checkBoxFour) {
			setPriceOptions([...priceOptions, "4"]);
		} else {
			const filteredPrices = priceOptions.filter(option => option !== "4");
			setPriceOptions(filteredPrices);
		}
	}, [checkBoxFour]);

	const Rando = () => (
		<div className="eats">
			<div className="imgDiv">
				<RandoAnim />
			</div>

			<div className="price">
				<Checkbox
					checked={checkBoxOne}
					color="primary"
					inputProps={{ "aria-label": "secondary checkbox" }}
					onChange={() => handleChange("$")}
				/>
				$
				<Checkbox
					checked={checkBoxTwo}
					color="primary"
					inputProps={{ "aria-label": "secondary checkbox" }}
					onChange={() => handleChange("$$")}
				/>{" "}
				$$
				<Checkbox
					checked={checkBoxThree}
					color="primary"
					inputProps={{ "aria-label": "secondary checkbox" }}
					onChange={() => handleChange("$$$")}
				/>{" "}
				$$$
				<Checkbox
					checked={checkBoxFour}
					color="primary"
					inputProps={{ "aria-label": "secondary checkbox" }}
					onChange={() => handleChange("$$$$")}
				/>{" "}
				$$$$
			</div>

			{/* rando button to show restaurant */}
			<Btn
				variant="contained"
				color="primary"
				onClick={onClick}
				label="Rando"
			/>
		</div>
	);

	return (
		<ContainerWrapper>
			{Object.keys(restaurant).length ? <RestaurantDetails /> : <Rando />}
		</ContainerWrapper>
	);
}
