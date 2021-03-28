import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

//components imports
import Btn from "../../components/Btn";
import ContainerWrapper from "../../components/ContainerWrapper";
import PriceForm from "../../components/PriceForm";
import Loading from "../../components/Loading";

//material-ui imports
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import RoomIcon from '@material-ui/icons/Room';

// styling import
import "./style.css";

const useStyles = makeStyles(theme => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

export default function Home() {
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
                .then(result => {
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

    const StarRating = () => {
        // convert to int a round to nearest half
        const num = Math.round(parseFloat(restaurant.rating) / 0.5) * 0.5;
        const stars = [];
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

    // display distance in miles
    const Distance = () => {
        // yelp returns distance in meters, convert to miles
        const convert = 0.000621371;
        const miles = restaurant.distance * convert;
        return +(Math.round(miles + "e+2") + "e-2");
    }

    const deg2rad = (deg) => {
        return deg * (Math.PI / 180);
    }

    const RestaurantDetails = () => (
        <div className="restaurant">
            <div>
                <img src={restaurant.image_url} alt="restaurant" />
                <h3>We found a(n) {restaurant.categories[0].title} place for you!</h3>
            </div>

            <div className="resContext">
                <div className="resInfo">
                    <div class="infoColumn" id="price">
                        {restaurant.price}
                    </div>

                    <div class="infoColumn" id="rating">
                        <StarRating />
                    </div>
                </div>

                <div className="resDetails">
                    <div className="detailColumnOne" align="left">
                        <p className="paragraph">Name:</p>
                        <p className="paragraph">Phone:</p>
                    </div>

                    <div className="detailColumnTwo" align="left">
                        <p className="paragraph">{restaurant.name}</p>
                        <p className="paragraph">{restaurant.display_phone}</p>
                    </div>
                </div>

                <p id="distance">
                    <RoomIcon /><Distance /> miles
                </p>

            </div>

            <h3>Sounds good, right?</h3>

            <div className={classes.root}>
                <Btn
                    variant="contained"
                    color="primary"
                    onClick={fetchRestaurant}
                    label="Nope!"
                />

                <Btn label="Yes, Take Me There!" onClick={goToRestaurant} />

            </div>
        </div>
    );

    const Rando = () => (
        <div className="eats">
            <div className="imgDiv">

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
