import React, { useState, useEffect } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import PriceCheckbox from '../../components/PriceCheckbox';
import axios from 'axios';
import { map } from 'lodash';


function ListItem (props) {
  return <li>{props.value} <PriceCheckbox /></li>
};



function PreferenceOptions() {
  const [ category, setCategory ] = useState([]);
  const [ food, setFood ] = useState([]);
   

    useEffect(() => {
    let dietPref;
    let displayDiet; 
    let cuisine;
    let displayCuisine;
  
     axios.get('/api/preferences').then((response) => {
   
     dietPref = response.data.filter(dietType => dietType.categoryType === 1)
     cuisine = response.data.filter(cuisineType => cuisineType.categoryType === 2)
   
     console.log(dietPref);
     console.log(cuisine);
     //displayDiet = dietPref.map((mappedDiet) =>  <ListItem key = {mappedDiet.displayName} value = {0} />);
     //displayCuisine = cuisine.map((mappedCuisine) => <ListItem key = {mappedCuisine.displayName} value = {0} />);
     setCategory(dietPref);
     setFood(cuisine);
    })
  }, [])
   
   
   
  //* add map function to map over yelp categories 

  return (
    <FormGroup>
      <ul>
      {category.map((catMap) => <ListItem key = {catMap.categoryId} value={catMap.displayName} />)}
      </ul>
      <ul>
        {food.map((foodMap) => <ListItem key = {foodMap.categoryId} value={foodMap.displayName} />)} 
      </ul>
    </FormGroup>
  );
}



export default PreferenceOptions;