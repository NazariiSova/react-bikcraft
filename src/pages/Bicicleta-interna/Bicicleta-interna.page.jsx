import React from "react";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

import { BicicletaInterna } from "../../components/СhoiceBikes/ChoiceBikes";
import { OtherBikes } from "../../components/OthersBikes/OthersBikes";

import "./Bicicleta-internaPage.scss";

import seguros from "./imgBicicletas/seguros.png";
import dec from "../../components/img/dec.svg";

import bicicleta1 from "../../components/img/bicicleta1.png";
import bicicleta2 from "../../components/img/bicicleta2.png";
import bicicleta3 from "../../components/img/bicicleta3.png";
import { useState } from "react";

const dataBikeCatalog = [
  {
    isMain: true,
    img: bicicleta1,
    price: "R$ 4.999",
    title: "Nimbus Stark",
  },
  {
    isMain: false,
    img: bicicleta2,
    price: "R$ 2.999",
    title: "Magic Migth",
  },
  {
    isMain: false,
    img: bicicleta3,
    price: "R$ 3.999",
    title: "Mebula Cosmic",
  },
];
const BicicletaInternaPage = () => {
  const [mainBike, setMainBike] = useState(dataBikeCatalog[0]);
  const [subBikes, setSubBikes] = useState(
    dataBikeCatalog.filter((bike) => {
      return bike.img !== dataBikeCatalog[0].img;
    })
  );

  const handlerChangeItem = (event) => {
    console.log(event.target.name);
    const newBikeName = event.target.name;

    const newMainBike = dataBikeCatalog.find((bike) => {
      return bike.name === newBikeName;
    });

    if (!newMainBike) {
      return;
    }
     
    setMainBike(newMainBike);
    setSubBikes(
      dataBikeCatalog.filter((bike) => {
        return bike.img !==newMainBike.img;
      })
    );
  };

  return (
    <div className="Bicicleta-interna-page-container">
      <div className="header-interna-container">
        <div className="header-interna-small-text">
          {dataBikeCatalog[0].price}
        </div>
        <div className="header-interna-title">{dataBikeCatalog[0].title}</div>
      </div>
      <div className="bicicletas-choice-container">
        <BicicletaInterna
         mainBike={mainBike}
         subBikes={subBikes}
          handlerChangeItem={handlerChangeItem}
        />
        <div className="bicicleta-choice-title">ESCOLHA A SUA</div>
        <OtherBikes />
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
