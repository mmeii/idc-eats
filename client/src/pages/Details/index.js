import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const Details = () => {
    return (
        <div>
            <Container>
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
                <Button variant="contained" color="primary">
                    <Link to="eats">
                        Nope
                    </Link>
                </Button>

                {/* goes to google for directions */}
                {/* TODO: add location and restaurant address */}
                <Button variant="contained" color="primary">
                    <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                        Take Me There!
                    </a>
                </Button>

            </Container>
        </div>
    )
}

export default Details;
