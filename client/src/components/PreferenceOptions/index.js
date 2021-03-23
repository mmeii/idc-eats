import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import PriceCheckbox from '../../components/PriceCheckbox';




function PreferenceOptions() {

  //* add map function to map over yelp categories 

  return (
    <FormGroup row>
      <PriceCheckbox />

    </FormGroup>
  );
}

export default PreferenceOptions;