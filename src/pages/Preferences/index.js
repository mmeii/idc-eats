import React, { useState, useEffect } from "react";
import ContainerWrapper from "../../components/ContainerWrapper";
import FormGroup from "@material-ui/core/FormGroup";
import axios from "axios";
import Chkbox from "../../components/Chkbox";
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
    window.location.href = "/home";
  };

  return (
    <div className="preferences">
      <ContainerWrapper>
        <FormGroup>
          <div>
            <h1>Preferences</h1>
          </div>
          <form action="/preferences" method="POST" id="preferencesForm">
            <h3>Dietary Concern (select one)</h3>
            <div id="diet">

              {categories.filter((category) => category.categoryType === 1).map((category) => (
                <Radiobutton key={category.categoryId} category={category} />
              ))}

              <div>
                <input type="radio" name="diet" value="0" defaultChecked="true" />
                <label htmlFor="None">None</label>
              </div>
            </div>
            <h3>Cuisine Preference (select all that apply)</h3>
            <div id="cuisine">
              {categories.filter((category) => category.categoryType === 2).map((category) => (
                <div>
                  <Chkbox key={category.categoryId} category={category} />
                </div>
              ))}
            </div>
            <div style={{ marginTop: "20px" }}>
              <Btn type="submit" label={"Save"} value="Save" aria-label="Save" onClick={handleSubmit}>Save</Btn>
            </div>
          </form>
        </FormGroup>
      </ContainerWrapper>
    </div>
  );
};

export default Preferences;