import React from "react";
import Footer from "../../components/footer/Footer";

import { BicicletaInterna } from "../../components/Сhoice-of-bikes/ChoiceBikes";
import { OtherBikes } from "../../components/Others-of-bikes/OthersBikes";

import "./Bicicleta-internaPage.scss"

// const dataBikeCatalog = [
//   {
//     isMain: true,
//     img: bicicleta1,
//     price: "R$ 4.999",
//     title: "Nimbus Stark",
//   },
//   {
//     isMain: false,
//     img: bicicleta2,
//     price: "R$ 2.999",
//     title: "Magic Migth",
//   },
//   {
//     isMain: false,
//     img: bicicleta3,
//     price: "R$ 3.999",
//     title: "Mebula Cosmic",
//   },
// ];
const BicicletaInternaPage = () => {
  return (
    <div className="Bicicleta-interna-page-container">
      <div className="header-internal-container">
        {/* <div className="header-internal-small-text">{price}</div>
        <div className="header-internal-title">{title}</div> */}
      </div>
      <div className="bicicletas-choice-container">
        <BicicletaInterna
        // key={item.title}
        //  img={item.img}
        //     title={item.title}
        //     price={item.price}
        //    isMain={item.isMain}
        />
        <div className="bicicleta-choice-title">ESCOLHA A SUA</div>
        <OtherBikes />
      </div>
      <Footer />
    </div>
  );
};

export default BicicletaInternaPage;
