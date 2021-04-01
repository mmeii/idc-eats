import React, {useState, useEffect} from "react";
import ContainerWrapper from "../../components/ContainerWrapper";
import PrefsBox from "../../components/PrefsBox";
import axios from "axios";



function Preferences() {

  const [userPreferences, setUserPreferences] = useState([]);
  //const [postPreferences, setPostPreferences] = useState({});


  useEffect(() => {
    handleSubmit();
}, []);
  

    const handleSubmit = formData => {
    const selectedPreferences = _.chain(formData)
        .filter(name => name)
        .value();
        console.log(selectedPreferences);
        axios.post('/api/preferences', {
          categoryType: selectedPreferences
        }).then(() => console.log(selectedPreferences))
        .catch(err => console.log(err));

    setUserPreferences(selectedPreferences);
};
  return (
    <div>
      <ContainerWrapper>
      <div style={{ textAlign: "center" }}>
        <h1>Preferences</h1>
      </div>
      <div style={{ margin: "0 auto" }}>
        <PrefsBox handleSubmit={handleSubmit}/>
      </div>
      </ContainerWrapper>
    </div>
  );
}

export default Preferences;
