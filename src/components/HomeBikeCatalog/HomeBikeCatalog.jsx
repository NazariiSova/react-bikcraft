import React from "react";
import { Link } from "react-router-dom";
import { dataBikeCatalog } from "../arrayBikes/arrayBikes"
import "./HomeBikeCatalog.scss"

export const HomeBikeCatalog = () => {
  return (
    <div className="home-bike-catalog-container">
      {dataBikeCatalog.map((bike) =>(
        <div className="catalog-card-item" key={bike.id}>
          <Link
            to={`/bicicleta-interna?id=${bike.id}`}
            
          >
            <img
              className="catalog-card-img"
              src={bike.img}
              alt={bike.title}
              style={{ cursor: "pointer" }}
            />
          </Link >
          <div className="catalog-card-description">{bike.title}</div>
          <div className="catalog-card-price">{bike.price}</div>
        </div>
      ))} 
    </div>
  )
}