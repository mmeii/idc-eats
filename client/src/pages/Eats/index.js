import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PriceCheckbox from "../../components/PriceCheckbox";
import { makeStyles } from "@material-ui/core/styles";
import Btn from "../../components/Btn";
import ContainerWrapper from "../../components/ContainerWrapper";
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
    // const [showDetails, setShowDetails] = useState(false);
    const [coords, setCoords] = useState();
    const [restaurant, setRestaurant] = useState({});

    //yelp get route basing on lat and long
    useEffect(() => {
        fetchCoords();
    }, []);

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

        if (coords) {
            axios
                .get(`/api/restaurants/${coords.latitude}/${coords.longitude}`)
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
    // open: is_closed
    // restaurant name: name
    // image: image_url
    // rating: rating
    // location: location.display_address
    // phone: phone

    {/* onclick to go to google maps with restaurant address */ }
    const goToRestaurant = () => {
        window.open(`http://maps.google.com/?q=${restaurant.location.display_address}`, "_blank")
    };

    const RestaurantDetails = () => (
        <div className="oneRestaurant">
            <div>
                <img src={restaurant.image_url} alt="restaurant" />
            </div>

            <div className="restDetails">
                <h3>We found a {restaurant.categories[0].title} restaurant for you!</h3>
                <p>Restaurant Name: {restaurant.name}</p>
                <p>Rating: {restaurant.rating}</p>
                <p>Address: {restaurant.location.display_address}</p>
                <p>Phone: {restaurant.phone}</p>
            </div>

            <div className={classes.root}>
                <Btn
                    variant="contained"
                    color="primary"
                    onClick={onClick}
                    label="Rando"
                />

                <Btn label="Take Me There!"
                    onClick={goToRestaurant} />

                {/* <Link to="details">
                    <Btn label="More Info" />
                </Link> */}
            </div>
        </div>
    );

    const Rando = () => (
        <div className="eats">
            <div className="imgDiv">
                <RandoAnim />
            </div>

            <div className="price">
                <PriceCheckbox /> $
				<PriceCheckbox /> $$
				<PriceCheckbox /> $$$
				<PriceCheckbox /> $$$$
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
