import React, { useState, useEffect } from 'react';
import { Formik, Form } from "formik";
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from "@material-ui/core/Checkbox";
import Btn from "../Btn";
import axios from 'axios';
import { map } from 'lodash';
import './style.css';


function ListItem (props) {
  return <li>{props.value} <Checkbox /></li>
};



function PreferenceOptions() {
  const [ category, setCategory ] = useState([]);
  const [ food, setFood ] = useState([]);
  //const [ currentPreferences, setCurrentPreferences ] = useState([]);
  
   

    useEffect(() => {
    let dietPref;
    let displayDiet; 
    let cuisine;
    let displayCuisine;
    let currentPreferences = [];
    
    //const handleSubmit = axios.post("/api/preferences", {
          //setCurrentPreferences = []
          
          
    //})
    //.then(function (response) {
      //console.log(response);
    //})
    //.catch(function (error) {
      //console.log(error);
    //});
   
    
  
     axios.get('/api/preferences').then((response) => {
   
     dietPref = response.data.filter(dietType => dietType.categoryType === 1)
     cuisine = response.data.filter(cuisineType => cuisineType.categoryType === 2)
   
     //console.log(dietPref);
     //console.log(cuisine);
     
     setCategory(dietPref);
     setFood(cuisine);
    })
  }, [])
   
   
   
  //* add map function to map over yelp categories 

  return (
    
    <Formik
      intialValues = {{ categoryId: []}}
      onSubmit={ (values) => {
       console.log (values)
        //axios.post(JSON.stringify(values, null, 2));
      
      
      
      ;
    }}>{({ values }) => (
      <Form>
      <p>Select one dietary preference:</p>
      <ul>
      {category.map((catMap) => <ListItem key = {catMap.categoryId} value={catMap.displayName} />)}
      </ul>
      <p>Cuisine choices:</p> 
      <ul>
        {food.map((foodMap) => <ListItem key = {foodMap.categoryId} value={foodMap.displayName} />)} 
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
    
  );
}



export default PreferenceOptions;