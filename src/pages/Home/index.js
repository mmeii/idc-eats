import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

//components imports
import ContainerWrapper from "../../components/ContainerWrapper";
import PriceForm from "../../components/PriceForm";
import Loading from "../../components/Loading";
import Motion from "../../components/Motion";

//material-ui imports
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Button from "@material-ui/core/Button";

// styling import
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  image: {
    width: "100%",
    maxHeight: "365px",
    objectFit: "cover",
    borderTopLeftRadius: "50px",
    borderBottomRightRadius: "50px",
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#D92B04",
    },
    secondary: {
      main: "#4E9DA6",
    },
  },
});

export default function Home() {
  const classes = useStyles();
  const [coords, setCoords] = useState();
  const [restaurant, setRestaurant] = useState({});
  const [priceOptions, setPriceOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(false);
    }
    
  }, [restaurant]);

  const fetchCoords = () => {
    navigator.geolocation.getCurrentPosition((res) => {
      setCoords({
        latitude: res.coords.latitude,
        longitude: res.coords.longitude,
      });
    });
  };

  const fetchRestaurant = () => { 
    if (coords) {
    setIsLoading(true)
      axios
        .get(
          `/api/restaurants/${coords.latitude}/${coords.longitude}?price=${priceOptions}`
        )
        .then((result) => {
          setRestaurant(result.data);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("cannot get coords");
    }
  };

  const handleSubmit = (formData) => {
    const selectedPrices = _.chain(formData)
      .map((option) => option)
      .filter((option) => option)
      .flatten()
      .value();

    setPriceOptions(selectedPrices);
  };

  console.log(restaurant);
  console.log(isLoading);

  const StarRating = () => {
    // convert to int a round to nearest half
    const num = Math.round(parseFloat(restaurant.rating) / 0.5) * 0.5;
    const stars = [];
    for (let i = 1; i < 6; i++) {
      const full = <i className="fas fa-star fa-sm"></i>;
      const half = <i className="fas fa-star-half-alt fa-sm"></i>;
      if (num > i || num === i) {
        stars.push(full);
      } else if (i - num === 0.5) {
        stars.push(half);
      }
    }
    // show stars
    return stars;
  };

  // onclick to go to google maps from current location to restaurant address
  const goToRestaurant = () => {
    window.open(
      `http://maps.google.com/?saddr=${coords.latitude},${coords.longitude}&daddr=${restaurant.location.display_address}`,
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
  };

  const RestaurantDetails = () => (
    <>
    
      <div className="home">
        <div>
          <img
            className={classes.image}
            src={restaurant.image_url}
            alt={restaurant.name}
          />
        </div>

        <h3 id="found">
          We found a(n){" "}
          <span id="attention">{restaurant.categories[0].title}</span> place for
          you!
        </h3>

        <hr />

        <div className="resContext">
          <div className="resInfo">
            <div className="infoColumn" id="price">
              {restaurant.price}
            </div>

            <div className="infoColumn" align="right" id="rating">
              <StarRating />
            </div>
          </div>

          <div className="resDetails">
            <p id="resName">{restaurant.name}</p>

            <div id="row">
              <div id="phone">
                <p>
                  <a href={`tel:${restaurant.display_phone}`}>
                    {restaurant.display_phone}
                  </a>
                </p>
              </div>
              <div id="distance">
                <i className="fas fa-map-marker-alt fa-sm"></i>
                <span>
                  <Distance /> miles
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <h3 id="good">
          Sounds <span id="attention">good</span> right?
        </h3>

        <div align="left">
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="primary"
              onClick={goToRestaurant}
              startIcon={<ThumbUpIcon />}
            >
              Take me there!
            </Button>

            <Button
              id="nopeBtn"
              variant="contained"
              color="secondary"
              onClick={fetchRestaurant}
              startIcon={<ThumbDownIcon />}
              ml={2}
            >
              Next!
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </>
  );

  const Rando = () => (
    <>
      <div className="eats">
        <Motion />
        <div className="imgDiv"></div>
        <h3>Select the price range and let us take care the rest for you!</h3>
        <PriceForm handleSubmit={handleSubmit} />
      </div>
    </>
  );


  return (
    <div className="homeWrapper">
      <ContainerWrapper>
      {isLoading ? <Loading /> :( 
        Object.keys(restaurant).length ? 
          <RestaurantDetails />
         : 
          <Rando />
      )}
      </ContainerWrapper>
    </div>
  );
}
