import React, {useState, useEffect} from "react";
import ContainerWrapper from "../../components/ContainerWrapper";
import FormGroup from "@material-ui/core/FormGroup";
import axios from "axios";
import Checkbox from "../../components/Checkbox";
import Btn from "../../components/Btn";
import Radiobutton from "../../components/Radiobutton"
import "./style.css";

function Preferences({ category }) {
  const [categories, setCategories] = useState([]);

    
  useEffect(() => {
      fetchCategories([]);
      }, []);
  
    const fetchCategories = () => {
      axios.get(`/api/preferences`)
        .then(result => {
          setCategories(result.data);
        })
        .catch(err => console.log(err));
    };
  
    console.log(categories);
    console.log(typeof categories);

    const handleSubmit = event => {
      event.preventDefault();   
      var formEl = document.getElementById("preferencesForm");
      var formData = new FormData(formEl);
      axios.post("/api/preferences", formData);
      window.location.href="/home";
    };

    //axios.post("/api/preferences", {
    //setCurrentPreferences = []

    //})
    //.then(function (response) {
    //console.log(response);
    //})
    //.catch(function (error) {
    //console.log(error);
    //});

    // const fetchCategories axios.get("/api/preferences").then((response) => {
    //   dietPref = response.data.filter(
    //     (dietType) => dietType.categoryType === DIETARY_CONCERN
    //   );
    //   cuisine = response.data.filter(
    //     (cuisineType) => cuisineType.categoryType === CUISINE_TYPE
    //   );
      
    //   //console.log(dietPref);
    //   //console.log(cuisine);

    //   setDietaryOptions(dietPref);
    //   setCuisineOptions(cuisine);
    // });
  // }, []);


//   const [userPreferences, setUserPreferences] = useState([]);
//   //const [postPreferences, setPostPreferences] = useState({});


//   useEffect(() => {
//     handleSubmit();
// }, []);
  

    // const handleSubmit = formData => {
    // const selectedPreferences = _.chain(formData)
    //     .filter(name => name)
    //     .value();
    //     console.log(selectedPreferences);
    //     axios.post('/api/preferences', {
    //       categoryType: selectedPreferences
    //     }).then(() => console.log(selectedPreferences))
    //     .catch(err => console.log(err));

    // setUserPreferences(selectedPreferences);

    return (
      <div>
        <ContainerWrapper>
        <FormGroup>
          <div>
          <h1>Preferences</h1>
        </div>
        <form action="/preferences" method="POST" id="preferencesForm">
          <div id="diet">
            <h3>Dietary Concern (select one)</h3>
              {categories.filter((category) => category.categoryType === 1).map((category) => (
                <Radiobutton key={category.categoryId} category={category} />
              ))}
          </div>
          <div id="cuisine">
            <h3>Cuisine Preference (select all that apply)</h3>
              {categories.filter((category) => category.categoryType === 2).map((category) => (
                <Checkbox key={category.categoryId} category={category} />
              ))}
          </div>
          <Btn type="submit" label={"Save"} value="Save" aria-label="Save" onClick={handleSubmit}>Save</Btn>          
        </form>
        </FormGroup>
        </ContainerWrapper>
      </div>
      
    );
  
};
  
export default Preferences;