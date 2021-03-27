import React from "react";
import RandoAnim from "../RandoAnim";
import ContainerWrapper from "../ContainerWrapper";
import "./style.css";

export default function Loading () {
    return (
        <div>
            <ContainerWrapper>
            <RandoAnim />
            <h2>Just a sec while we find your new favorite!</h2>
            </ContainerWrapper>
        </div>
    )
};