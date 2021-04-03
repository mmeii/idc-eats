import React from "react";
import RandoAnim from "../RandoAnim";
import ContainerWrapper from "../ContainerWrapper";
import "./style.css";


export default function Loading() {
  return (
    <div>
      <div class="anim" aria-label="spinning foods">
        <RandoAnim />
      </div>
      <div class="noAnim" aria-label="donut">
      </div>
      <h2>Just a sec while we find your new favorite!</h2>
    </div>
  );
}
