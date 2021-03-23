import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PriceCheckbox from '../../components/PriceCheckbox';
import { makeStyles } from '@material-ui/core/styles';
import Btn from '../../components/Btn';
import ContainerWrapper from '../../components/ContainerWrapper';
import './style.css';
import RandoAnim from "../../components/RandoAnim";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Eats() {

    const [showDetails, setShowDetails] = useState(false);
    const onClick = () => setShowDetails(true);

    const RestaurantDetails = () => (
        <div className="oneRestaurant">
            <div>
                <img src="https://via.placeholder.com/300" alt="restaurant" />
            </div>

            <Link to="details">
                <Btn label="More Info" />
            </Link>
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


