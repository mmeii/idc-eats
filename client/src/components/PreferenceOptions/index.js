import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import PriceCheckbox from '../../components/PriceCheckbox';
import axios from 'axios';





function PreferenceOptions() {
   axios.get('/api/preferences')
   .then(function(response){
     console.log(response)
   })
  //* add map function to map over yelp categories 

  return (
    <FormGroup row>
      <PriceCheckbox />

    </FormGroup>
  );
}

PreferenceOptions();

export default PreferenceOptions;