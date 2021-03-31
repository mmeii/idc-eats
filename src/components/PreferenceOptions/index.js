import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Btn from "../Btn";
import axios from "axios";
import { map } from "lodash";
import "./style.css";

const DIETARY_CONCERN = 1;
const CUISINE_TYPE = 2;


function PreferenceOptions() {
  const [dietaryOptions, setDietaryOptions] = useState([]);
  const [cuisineOptions, setCuisineOptions] = useState([]);
  const [toggle, setToggle] = useState(false);
  //const [ currentPreferences, setCurrentPreferences ] = useState([]);
  const initialDietOptionsValue = {};

  useEffect(() => {
    let dietPref;
    let displayDiet;
    let cuisine;
    let displayCuisine;
    let currentPreferences = [];

    //axios.post("/api/preferences", {
    //setCurrentPreferences = []

    //})
    //.then(function (response) {
    //console.log(response);
    //})
    //.catch(function (error) {
    //console.log(error);
    //});

    axios.get("/api/preferences").then((response) => {
      dietPref = response.data.filter(
        (dietType) => dietType.categoryType === DIETARY_CONCERN
      );
      cuisine = response.data.filter(
        (cuisineType) => cuisineType.categoryType === CUISINE_TYPE
      );
      
      //console.log(dietPref);
      //console.log(cuisine);

      setDietaryOptions(dietPref);
      setCuisineOptions(cuisine);
    });
  }, []);

  useEffect(() => {
    for (let option of dietaryOptions) {initialDietOptionsValue[option.displayName] = false};
    
    for (let option of cuisineOptions) {initialDietOptionsValue[option.displayName] = false};
    setToggle(true);
    console.log(initialDietOptionsValue);
    console.log(Object.keys(initialDietOptionsValue).length);
  }
  ,[cuisineOptions]);

  
  
  
  //* add map function to map over yelp categories
  
  
  return (
    <>
    {toggle ? (
      
    <Formik
      intialValues={ initialDietOptionsValue }
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleChange }) => (
        <Form>
          
              <p>Select one dietary preference:</p>
              <ul>
                {dietaryOptions.map((dietOption) => (
                  <FormControlLabel
                    key={dietOption.categoryId}
                    label={dietOption.displayName}
                    value={dietOption.displayName}
                    control={<Checkbox color="primary" />}
                    onChange={handleChange}
                  />
                ))}
              </ul>
              <p>Cuisine choices:</p>
              <ul>
                {cuisineOptions.map((foodMap) => (
                  <FormControlLabel
                    key={foodMap.categoryId}
                    label={foodMap.displayName}
                    value={foodMap.displayName}
                    control={<Checkbox color="primary" />}
                    onChange={handleChange}
                  />
                ))}
              </ul>

              <Btn
                id="savePrefBtn"
                variant="contained"
                color="secondary"
                type="submit"
                ml={2}
              >
                Save
              </Btn>
            
          
        </Form>
      )}
    </Formik>
    ) : null}
    </>
  );
}
export default PreferenceOptions;
