import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PriceCheckbox from '../../components/PriceCheckbox';
import { makeStyles } from '@material-ui/core/styles';
import Btn from '../../components/Btn';
import ContainerWrapper from '../../components/ContainerWrapper';
import './style.css';
import RandoAnim from "../../components/RandoAnim";
// import axios from "axios";
// const YELP_API_KEY = process.env.YELP_API_KEY;

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//         },
//     },
// }));

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

    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${YELP_API_KEY}`,
    //         "Content-type": "application/json",
    //     },
    //     params: {
    //         term: 'food',
    //         latitude: '0',
    //         longitude: '0',
    //         radius: '',
    //         sort_by: 'rating'
    //     }
    // }

    const onClick = () => {
        setShowDetails(true);

        //yelp get route basing on lat and long
        // https://api.yelp.com/v3/businesses/search?term=chinese&latitude=37.786882&longitude=-122.399972

        // axios.get("https://api.yelp.com/v3/businesses/search?", config)
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
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


