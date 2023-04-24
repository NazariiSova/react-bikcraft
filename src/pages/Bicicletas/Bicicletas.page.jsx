import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import "./bicicletasPage.scss";

import { BicicletasCatalog } from "../../components/Bicicletas-catalog/BicicletasCatalog";

import { dataBikeCatalog } from "../../components/arrayBikes/arrayBikes"



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
            id={item.id}
            isDarkBackground={item.isDarkBackground}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BicicletasPage;
