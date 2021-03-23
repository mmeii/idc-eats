import React from "react";
import Image1 from "./Images/1.jpg";
import Image2 from "./Images/2.jpg";
import Image3 from "./Images/3.jpg";
import Image4 from "./Images/4.jpg";

function Randomizer (items) {
    return items[Math.floor(Math.random()*items.length)]
}

const Images = [Image1, Image2, Image3, Image4];
const BackgroundSource = Randomizer(Images);

export default BackgroundSource;