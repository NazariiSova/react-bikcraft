import React from "react";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { BicicletaInterna } from "../../components/СhoiceBikes/ChoiceBikes";
import { OtherBikes } from "../../components/OthersBikes/OthersBikes";

import "./Bicicleta-internaPage.scss";
import { dataBikeCatalog } from "../../components/arrayBikes/arrayBikes";

import seguros from "./imgBicicletas/seguros.png";
import dec from "../../components/img/dec.svg";


import { useState } from "react";


const BicicletaInternaPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const bikeId = searchParams.get("id");
  const [mainBike, setMainBike] = useState(dataBikeCatalog[bikeId-1]);
  const [subBikes, setSubBikes] = useState(
    dataBikeCatalog.filter((bike) => {
      return bike.title !== dataBikeCatalog[bikeId-1].title;
    })
  );

  const handlerChangeItem = (event) => {
    
    const newBikeName = event.target.title;

    const newMainBike = dataBikeCatalog.find((bike) => {
      return bike.title === newBikeName;
    });

    if (!newMainBike) {
      return;
    }
     
    setMainBike(newMainBike);
    setSubBikes(
      dataBikeCatalog.filter((bike) => {
        return bike.title !==newMainBike.title;
      })
    );
  };

  return (
    <div className="Bicicleta-interna-page-container">
      <div className="header-interna-container">
        <div className="header-interna-small-text">
          {mainBike.price}
        </div>
        <div className="header-interna-title">{mainBike.title}</div>
      </div>
      <div className="bicicletas-choice-container">
        <BicicletaInterna
         mainBike={mainBike}
         subBikes={subBikes}
        handlerChangeItem={handlerChangeItem}
       
        />
        <div className="bicicleta-choice-title">ESCOLHA A SUA</div>
        <OtherBikes 
           subBikes={subBikes}
          handlerChangeItem={handlerChangeItem}/>
      </div>
      <div className="seguros-container">
        <div className="seguros-img-box">
          <img className="seguros-img" src={seguros} alt="seguros" />
        </div>
        <div className="seguros-content-box">
          <div className="seguros-content-title">
            pedale mais tranquilo com nosso
          </div>
          <div className="seguros-content-description">
            Inscreva-se em um dos planos do nosso seguro Bikecraft e aproveite
            diversos benefícios.
          </div>
          <Link className="seguros-content-btn" to="/termos">
            conheça mais
          </Link>
        </div>
        <div className="seguros-dec-box">
          <img className="seguros-dec" src={dec} alt="deс"/>
          <img className="seguros-dec" src={dec} alt="deс"/>
        </div>
      </div>
      <div className="seguros-blak-space"></div>
      <Footer />
    </div>
  );
};

export default BicicletaInternaPage;
