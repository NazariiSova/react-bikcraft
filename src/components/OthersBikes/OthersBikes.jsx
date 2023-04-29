import React from "react";
import "./OthersBikes.scss";



export const OtherBikes = ({ subBikes, handlerChangeItem }) => { 
  
  return (
    <div className="others-bikes-container">
      {subBikes.map((subBike) => (
        <div className="others-bikes-box"key={subBike.id}>
          <img className="others-bikes-img"  title={subBike.title} src={subBike.img} onClick={handlerChangeItem} alt={subBike.title}/>
          <div className="others-bikes-subtitle">{subBike.title}</div>
          <div className="others-bikes-prise">{subBike.price}</div>
        </div>
      ))}
    </div>
  );
};
