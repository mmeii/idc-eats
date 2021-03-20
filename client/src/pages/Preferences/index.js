import React from "react";
import PreferenceOptions from "../../components/PreferenceOptions";

function Preferences() {
  return (
    <div>

      <div style={{ textAlign: "center" }}>
        <h1>Preferences</h1>
      </div>
      <div style={{ margin: "0 auto" }}>
        <PreferenceOptions />
      </div>
    </div>
  );
}

export default Preferences;
