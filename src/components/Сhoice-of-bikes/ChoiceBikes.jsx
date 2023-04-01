import { Link } from "react-router-dom";
import "./choiceBikes.scss";

import bike from "../img/Icons/bike.png";
import material from "../img/Icons/material.png";
import speed from "../img/Icons/speed.png";
import tracker from "../img/Icons/tracker.png";

import bicicleta1 from "../../pages/Bicicleta-interna/imgBicicletas/bicicleta1.png";
import bicicleta2 from "../../pages/Bicicleta-interna/imgBicicletas/bicicleta2.png";
import bicicleta3 from "../../pages/Bicicleta-interna/imgBicicletas/bicicleta3.png";

import dec from "../img/dec.svg";

const bike1 = "Nimbus Stack";
const bike2 = "Magic Migth";
const bike3 = "Mebula Cosmic";

export const BicicletaInterna = ({img, title, price}) =>{
let isMain = img ? "main" : "small";
return (
<div className="choice-container">
    <div className="bikes-photo-container">
        <img className="bikes-photo-main" src={bicicleta1} alt={bike1}/>
        <div className="bikes-photos-small">
        <img className="bikes-photo-small" src={bicicleta2} alt={bike2}/>
        <img className="bikes-photo-small" src={bicicleta3} alt={bike3}/>
        </div>

    </div>
    <div className="bike-details-container">
        <div className="bike-main-description">`A ${bike1} é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade. `</div>
    </div>
</div>
) 
};