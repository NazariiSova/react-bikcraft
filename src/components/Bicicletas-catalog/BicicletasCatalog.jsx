import { Link } from "react-router-dom";
import "./BicicletasCatalog.scss";

import bike from "../img/Icons/bike.png";
import material from "../img/Icons/material.png";
import speed from "../img/Icons/speed.png";
import tracker from "../img/Icons/tracker.png";

import dec from "../img/dec.svg";

export const BicicletasCatalog = ({ isDarkBackground, img, price, title }) => {
  let Background = isDarkBackground ? "dark" : "light";
  return (
    <div className={`bike-container bike-container--${Background}`}>
      <div className="bike-img-container">
        <img className="bike-img" src={img} alt="bike" />
        <div className="bike-price">{price}</div>
      </div>
      <div className="bike-title-and-dec">
        <div className="bike-title">{title}</div>
        <img src={dec} alt="dec" className="bike-dec" />
      </div>
      <div className="bike-description">
        {`A ${title} é a melhor Bikcraft já criada pela nossa equipe. Ela vem
        equipada com os melhores acessórios, o que garante maior velocidade.`}
      </div>
      <div className="bike-footer-container">
        <div className="bike-list-container">
          <div className="bike-list">
            <img className="bike-list-img" src={bike} />
            Motor Elétrico
          </div>
          <div className="bike-list">
            <img className="bike-list-img" src={material} />
            Fibra de Carbono
          </div>
          <div className="bike-list">
            <img className="bike-list-img" src={speed} />
            40km/h
          </div>
          <div className="bike-list">
            <img className="bike-list-img" src={tracker} />
            Rastreador
          </div>
        </div>
        <div className="bike-btn"><Link className="header-post-button-link" to="/bicicleta-interna">MAIS SOBRE →</Link></div>
      </div>
    </div>
  );
};
