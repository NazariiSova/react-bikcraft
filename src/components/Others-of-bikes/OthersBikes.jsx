import React from "react";
import "./OthersBikes.scss";

import bike1 from "../../components/img/bicicleta1.png"
import bike2 from "../../components/img/bicicleta2.png"
import bike3 from "../../components/img/bicicleta3.png"

export const OtherBikes = ({ img, title, price }) => {
    return (
      <div className="others-bikes-container">
       <div className="others-bikes-box">
        <img className="others-bikes-img" src={bike2}/>
        <div className="others-bikes-subtitle">Magic Might</div>
        <div className="others-bikes-prise">R$ 2499</div>
       </div>
       <div className="others-bikes-box">
       <img className="others-bikes-img" src={bike3}/>
        <div className="others-bikes-subtitle">Nebula Cosmic</div>
        <div className="others-bikes-prise">R$ 3999</div>
       </div>
      </div>
    );
  };
