import React, {useState, useEffect} from "react";
import ContainerWrapper from "../../components/ContainerWrapper";
import PrefsBox from "../../components/PrefsBox";
import axios from "axios";
import Checkbox from "../../components/Checkbox";

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
  
    // const displayCategories = [];
    
    // function convertCategories() {
    //   displayCategories.push(categories);
    // };

    // convertCategories();

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
        <div style={{ textAlign: "center" }}>
          <h1>Preferences</h1>
        </div>
        <form action="/preferences" method="POST">

          {categories.map((category) => (
            category.categoryType === 1 ? (
            <div>
              <h2>Dietary preferences (select one)</h2>
              <Checkbox key={category.categoryId} category={category} />
            </div>
            ) :
            (
            <div>
              <h2>Cuisine preferences (select all that apply)</h2>
              <Checkbox key={category.categoryId} category={category} />
            </div>
            )
          ))}
          <button type="submit" value="Save">Save</button>
        </form>
        {/* <div style={{ margin: "0 auto" }}>
          <PrefsBox handleSubmit={handleSubmit}/>
        </div> */}
        </ContainerWrapper>
      </div>
    );
  
};
  
export default Preferences;