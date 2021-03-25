import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PriceCheckbox from '../../components/PriceCheckbox';
import { makeStyles } from '@material-ui/core/styles';
import Btn from '../../components/Btn';
import ContainerWrapper from '../../components/ContainerWrapper';
import './style.css';
import RandoAnim from "../../components/RandoAnim";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Eats() {

    const classes = useStyles();
    const [showDetails, setShowDetails] = useState(false);
    const [coords, setCoords] = useState();
    const [restaurant, setRestaurant] = useState();

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
        setShowDetails(true);
        console.log(coords);

        if (coords) {
            axios.get(`/api/restaurants/${coords.latitude}/${coords.longitude}`)
                .then(res => console.log({ res }))
                .then((result) => {
                    setRestaurant(result);
                })
                .catch((err) => console.log(err));
        } else {
            console.log("cannot get coords");
        }
    }

    const RestaurantDetails = () => (
        <div className="oneRestaurant">
            <div>
                <img src="https://via.placeholder.com/300" alt="restaurant" />
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
    )

    return (
        <ContainerWrapper>
            {showDetails ? <RestaurantDetails /> : <Rando />}
        </ContainerWrapper >
    )
}


