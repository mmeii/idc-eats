import React from 'react';
import { Link } from "react-router-dom";
import Btn from '../../components/Btn';
import ContainerWrapper from '../../components/ContainerWrapper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Details = () => {
    const classes = useStyles();

    return (
        <div>
            <ContainerWrapper>
                <h1>Restaurant Name</h1>
                <div className="restaurantImage">
                    <img src="https://via.placeholder.com/300" alt="restaurant" />
                </div>

                <div className="restaurantDetail">
                    <h2>Rating: </h2>
                    <h2>Location: </h2>
                    <h2>Phone: </h2>
                </div>

                {/* goes back to Eats/rando page */}
                <div className={classes.root}>
                    <Link to="eats">
                        <Btn label="Nope" />
                    </Link>

                    {/* goes to google for directions */}
                    {/* TODO: add location and restaurant address */}
                    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                        <Btn label="Take Me There!" />
                    </a>
                </div>

            </ContainerWrapper>
        </div>
    )
}

export default Details;
