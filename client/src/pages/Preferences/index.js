import React from "react";
import ContainerWrapper from "../../components/ContainerWrapper";
import PreferenceOptions from "../../components/PreferenceOptions";

function Preferences() {
  return (
    <div>
      <ContainerWrapper>
      <div style={{ textAlign: "center" }}>
        <h1>Preferences</h1>
      </div>
      <div style={{ margin: "0 auto" }}>
        <PreferenceOptions />
      </div>
      </ContainerWrapper>
    </div>
  );
}

export default Preferences;
