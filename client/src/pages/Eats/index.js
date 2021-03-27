import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Btn from "../../components/Btn";
import ContainerWrapper from "../../components/ContainerWrapper";
import "./style.css";
import RandoAnim from "../../components/RandoAnim";
import PriceForm from "../../components/PriceForm";
import axios from "axios";
import _ from "lodash";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

export default function Eats() {
    const classes = useStyles();
    const [coords, setCoords] = useState();
    const [restaurant, setRestaurant] = useState({});
    const [priceOptions, setPriceOptions] = useState([]);

    //yelp get route basing on lat and long
    useEffect(() => {
        fetchCoords();
    }, []);

    useEffect(() => {
        fetchRestaurant();
    }, [priceOptions]);

    useEffect(() => {
        if (restaurant.categories) {
            const categories = restaurant.categories;
            axios.patch("/api/weights/decrement", categories);
        }
    }, [restaurant]);

    const fetchCoords = () => {
        navigator.geolocation.getCurrentPosition(res => {
            setCoords({
                latitude: res.coords.latitude,
                longitude: res.coords.longitude,
            });
        });
    };

    const fetchRestaurant = () => {
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

    const handleSubmit = formData => {
        const selectedPrices = _.chain(formData)
            .map(option => option)
            .filter(option => option)
            .flatten()
            .value();

        setPriceOptions(selectedPrices);
    };

    console.log(restaurant);
    // open: is_closed
    // restaurant name: name
    // image: image_url
    // rating: rating
    // location: location.display_address
    // phone: phone

    const StarRating = () => {
        // convert str to int a round to nearest half
        const num = Math.round(parseFloat(restaurant.rating) / 0.5) * 0.5;
        const stars = [];
        console.log(num);
        for (let i = 1; i < 6; i++) {
            const full = <StarIcon />;
            const half = <StarHalfIcon />;
            if (num > i || num === i) {
                stars.push(full);
            } else if (i - num === 0.5) {
                stars.push(half);
            }
        }
        // show stars
        return stars;
    }

    // onclick to go to google maps with restaurant address	
    const goToRestaurant = () => {
        window.open(
            `http://maps.google.com/?q=${restaurant.location.display_address}`,
            "_blank"
        );

        const categories = restaurant.categories;
        axios.patch("/api/weights/increment", categories);
    };

    const RestaurantDetails = () => (
        <div className="oneRestaurant">
            <div>
                <img src={restaurant.image_url} alt="restaurant" />
            </div>

            <div className="restDetails">
                <h3>We found a {restaurant.categories[0].title} restaurant for you!</h3>
                <p>Restaurant Name: {restaurant.name}</p>
                <p>Price: {restaurant.price}</p>
                <p>Rating: <StarRating /></p>
                <p>
                    Address: {restaurant.location.display_address[0]},{" "}
                    {restaurant.location.display_address[1]}
                </p>
                <p>Phone: {restaurant.display_phone}</p>
                <h3>Sounds good, right?</h3>
            </div>

            <div className={classes.root}>
                <Btn
                    variant="contained"
                    color="primary"
                    onClick={fetchRestaurant}
                    label="Nope!"
                />

                <Btn label="Yes, Take Me There!" onClick={goToRestaurant} />

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

            <PriceForm handleSubmit={handleSubmit} />
        </div>
    );

    return (
        <ContainerWrapper>
            {Object.keys(restaurant).length ? <RestaurantDetails /> : <Rando />}
        </ContainerWrapper>
    );
}
