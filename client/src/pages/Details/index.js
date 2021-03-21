import React from 'react';
import { Link } from "react-router-dom";
import Btn from '../../components/Btn';
import ContainerWrapper from '../../components/ContainerWrapper';

const Details = () => {
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
                <Link to="eats">
                    <Btn label="Nope" />
                </Link>

                {/* goes to google for directions */}
                {/* TODO: add location and restaurant address */}
                <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                    <Btn label="Take Me There!" />
                </a>

            </ContainerWrapper>
        </div>
    )
}

export default Details;
