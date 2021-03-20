import React, { useState } from 'react';
import { Link } from "react-router-dom";
import PriceCheckbox from '../../components/PriceCheckbox';
import { makeStyles } from '@material-ui/core/styles';
import Btn from '../../components/Btn';
import Container from '@material-ui/core/Container';
import ContainerWrapper from '../../components/ContainerWrapper';

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
        <div className="restaurantDetail">


            <Link to="details">
                <Btn label="More Info" />
            </Link>
        </div>
    );

    return (
        <ContainerWrapper>
            <div className="eats">
                <div>
                    <img src={`${process.env.PUBLIC_URL}/assets/rando.jpg`} alt="restaurant" />
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
                    value="Rando"
                    label="Rando"
                />

                {/* should be hidden tuntil Rando btn is clicked */}
                {showDetails ? <RestaurantDetails /> : null}

            </div>
        </ContainerWrapper >
    )
}


