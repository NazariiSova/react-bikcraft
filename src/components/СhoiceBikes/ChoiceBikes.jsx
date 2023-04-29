import { Link } from "react-router-dom";
import "./choiceBikes.scss";

import bike from "../img/Icons/bike.png";
import material from "../img/Icons/material.png";
import speed from "../img/Icons/speed.png";
import tracker from "../img/Icons/tracker.png";


import delivery from "./img/delivery.png";
import quantity from "./img/quantity.png";

import dec from "../img/dec.svg";

export const BicicletaInterna = ({mainBike, subBikes, handlerChangeItem}) => {
 
  return (
    
    <div className="choice-container">
      <div className="bikes-photo-container">
        <img className="bikes-photo-main" src={mainBike.img} alt={mainBike.title} />
        <div className="bikes-photos-small">
          {subBikes.map((subBike) =>(
               <img
            className="bikes-photo-small"
            src={subBike.img}
            alt={subBike.title}
            title={subBike.title}
            onClick={handlerChangeItem}
            key={subBike.id}
          />
          ))}
       
         
        </div>
        <img className="bikes-photo-dec" src={dec} alt="dec"/>
      </div>
      <div className="bike-details-container">
        <div className="bike-main-description">
          A {mainBike.title} é a melhor Bikcraft já criada pela nossa equipe. Ela vem
          equipada com os melhores acessórios, o que garante maior velocidade.
        </div>
        <div className="bike-btn-item-box">
          <Link className="bike-choice-btn" to="/seguros">
            Selecione a sua
          </Link>
          <div className="bike-choice-item">
            <div className="bike-choice-item-box">
              <img
                className="bike-choice-item-img"
                src={delivery}
                alt="delivery"
              />
              entrega em 5 dias
            </div>
            <div className="bike-choice-item-box bike-choice-quantity">
              <img
                className="bike-choice-item-img"
                src={quantity}
                alt="quantity"
              />
              18 em estoque
            </div>
          </div>
        </div>
        <div className="bike-choice-info-title">Informações</div>
        <div className="bike-choice-info-container">
          <div className="bike-choice-info-box">
            <img className="bike-choice-info-img" src={bike} alt="bike" />
            <div className="bike-choice-info-subtitle">Motor Elétrico</div>
            <div className="bike-choice-info-description">
              Permite você viajar distâncias inimaginaveis com a sua bike.
            </div>
          </div>

          <div className="bike-choice-info-box">
            <img className="bike-choice-info-img" src={speed} alt="speed" />
            <div className="bike-choice-info-subtitle">40 Km/h</div>
            <div className="bike-choice-info-description">
              A mais rápida bicicleta elétrica disponível hoje no mercado.
            </div>
          </div>

          <div className="bike-choice-info-box">
            <img className="bike-choice-info-img" src={tracker} alt="tracker" />
            <div className="bike-choice-info-subtitle">Rastreador</div>
            <div className="bike-choice-info-description">
              Rastreador e sistema anti-furto para garantir o seu sossego.
            </div>
          </div>

          <div className="bike-choice-info-box">
            <img
              className="bike-choice-info-img"
              src={material}
              alt="material"
            />
            <div className="bike-choice-info-subtitle">Fibrade Carbono</div>
            <div className="bike-choice-info-description">
              Material leve e de excelente qualidade.
            </div>
          </div>
        </div>
        <div className="bike-choice-passport-title">Ficha técnica</div>
        <div className="bike-choice-passport-container">
          <div className="bike-choice-passport-box">
            <div className="bike-choice-passport-subtitle">Peso</div>
            <div className="bike-choice-passport-description">9 kg</div>
          </div>
          <div className="bike-choice-passport-line"></div>

          <div className="bike-choice-passport-box">
            <div className="bike-choice-passport-subtitle">Altura</div>
            <div className="bike-choice-passport-description">60 cm</div>
          </div>
          <div className="bike-choice-passport-line"></div>

          <div className="bike-choice-passport-box">
            <div className="bike-choice-passport-subtitle">Largura</div>
            <div className="bike-choice-passport-description">120 cm</div>
          </div>
          <div className="bike-choice-passport-line"></div>

          <div className="bike-choice-passport-box">
            <div className="bike-choice-passport-subtitle">Profundidade</div>
            <div className="bike-choice-passport-description">10 cm</div>
          </div>
          <div className="bike-choice-passport-line"></div>

          <div className="bike-choice-passport-box">
            <div className="bike-choice-passport-subtitle">Marchas</div>
            <div className="bike-choice-passport-description">16</div>
          </div>
          <div className="bike-choice-passport-line"></div>

          <div className="bike-choice-passport-box">
            <div className="bike-choice-passport-subtitle">Rodas</div>
            <div className="bike-choice-passport-description">29</div>
          </div>
        </div>
      </div>
      

    </div>
  );
};
