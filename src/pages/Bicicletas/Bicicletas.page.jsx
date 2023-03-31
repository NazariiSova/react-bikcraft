import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import "./bicicletasPage.scss";

import { BicicletasCatalog } from "../../components/Bicicletas-catalog/BicicletasCatalog";

import bicicleta1 from "./imgBicicletas/bicicleta1.png";
import bicicleta2 from "./imgBicicletas/bicicleta2.png";
import bicicleta3 from "./imgBicicletas/bicicleta3.png";

const dataBikeCatalog = [
  {
    isDarkBackground: false,
    img: bicicleta1,
    price: "R$ 4.999",
    title: "Nimbus Stark",
  },
  {
    isDarkBackground: true,
    img: bicicleta2,
    price: "R$ 2.999",
    title: "Magic Migth",
  },
  {
    isDarkBackground: false,
    img: bicicleta3,
    price: "R$ 3.999",
    title: "Mebula Cosmic",
  },
];

const BicicletasPage = () => {
  return (
    <div className="bicicletas-page-container">
      <div className="header-container">
        <div className="header-small-text">ESCOLHA A MELHORA PARA VOCÊ</div>
        <div className="header-title">nossas bicicletas</div>
      </div>
      <div className="bicicletas-catalog-container">
        {dataBikeCatalog.map((item) => (
          <BicicletasCatalog
            key={item.title}
            title={item.title}
            price={item.price}
            img={item.img}
            isDarkBackground={item.isDarkBackground}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BicicletasPage;
