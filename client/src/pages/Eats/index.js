import React from 'react';
import PriceCheckbox from '../../components/PriceCheckbox';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function Eats() {

    return (
        <Container>
            <div className="eats">
                <div className="price">
                    <PriceCheckbox /> $
                <PriceCheckbox /> $$
                <PriceCheckbox /> $$$
                <PriceCheckbox /> $$$$
            </div>

                <Button variant="contained" color="primary">
                    Rando
                </Button>

                <div className="restaurantImage">
                    <img src="https://via.placeholder.com/300" alt="restaurant" />
                </div>

                <Button variant="contained" color="primary">
                    More Info
            </Button>
            </div>
        </Container>
    )
}


