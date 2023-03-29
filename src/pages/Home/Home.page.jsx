import React from "react";
import "./homePage.scss";
import imgIntro from "./imgHome/img-intro.png";
import dec from "../../components/img/dec.svg"
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { SupportCard } from "../../components/support-card/SupportCard";

import bicicleta1 from "./imgHome/bicicleta1.png";
import bicicleta2 from "./imgHome/bicicleta2.png";
import bicicleta3 from "./imgHome/bicicleta3.png";

import firstIcon from "../../components/img/Icons/bike.png";
import secondIcon from "../../components/img/Icons/tracker.png";
import diferencial from "./imgHome/diferencial.png";

import ranek from "./imgHome/imgParceiros/ranek.png";
import caravan from "./imgHome/imgParceiros/caravan.png";
import dogs from "./imgHome/imgParceiros/dogs.png";
import handel from "./imgHome/imgParceiros/handel.png";

import surfbot from "./imgHome/imgParceiros/surfbot.png";
import wildbeast from "./imgHome/imgParceiros/wildbeast.png";
import flexblog from "./imgHome/imgParceiros/flexblog.png";
import lescone from "./imgHome/imgParceiros/lescone.png";

import partners from "./imgHome/depoimento.png";

import quotationMarck from "./imgHome/quotationMarck.png";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="header-post">
        <img className="header-post-dec" src={dec} alt="dec" />
        <div className="header-post-text">
          <div className="header-post-title">bicicletas feitas sob medida</div>
          <div className="header-post-description">
            Bicicletas elétricas de alta precisão e qualidade, feitas sob medida
            para o cliente. Explore o mundo na sua velocidade com a Bikcraft.
          </div>
          <button className="header-post-button">Selecione a sua</button>
        </div>
        <img src={imgIntro} alt="img-intro" />
      </div>

      <div className="catalog-container">
        <div className="catalog-title">escohola a sua</div>
        <div className="catalog-cards">
          <div className="catalog-card-item">
            <img
              className="catalog-card-img"
              src={bicicleta2}
              alt="bicicleta2"
            />
            <div className="catalog-card-description">Magic Migth</div>
            <div className="catalog-card-price">R$ 2499</div>
          </div>
          <div className="catalog-card-item">
            <img className="catalog-card-img" src={bicicleta1} alt="bicicleta1" />
            <div className="catalog-card-description">Nimbus Stark</div>
            <div className="catalog-card-price">R$ 4909</div>
          </div>
          <div className="catalog-card-item">
            <img className="catalog-card-img" src={bicicleta3} alt="bicicleta3" />
            <div className="catalog-card-description">Nebula Cosmic</div>
            <div className="catalog-card-price">R$ 3999 </div>
          </div>
        </div>
      </div>
      <div className="diferencial-container">
        <img className="diferencial-dec" src={dec} alt="dec" />
        <div className="diferencial-text-container">
          <div className="diferencial-text-title">Tecnologia avançada</div>
          <div className="diferencial-text-subtitle">
            Você escolhe as suas cores e componentes
          </div>
          <div className="diferencial-text-content">
            Cada Bikcraft é única e possui a sua identidade. As medidas serão
            exatas para o seu corpo e altura, garantindo maior conforto e
            ergonomia na sua pedalada. Você pode também personalizar
            completamente as suas cores.
          </div>
          <Link
            className="headlines diferencial-text-button"
            to="/bicicleta-interna"
          >
            ESCOLHA UM MODELO
          </Link>
          <div className="diferencial-text-button-underline"></div>
          <div className="diferencial-text-footer-container">
            <div className="diferencial-text-first">
              <img
                className="diferencial-text-footer-icon"
                src={firstIcon}
                alt="firstIcon"
              />
              <div className="diferencial-text-footer-title">
                Motor Elétrico
              </div>
              <div className="diferencial-text-footer-content">
                Toda Bikcraft é equipada com um motor elétrico que possui
                duração de até 120h. A bateria é recarregada com a sua energia
                gasta ao pedalar.
              </div>
            </div>
            <div className="diferencial-text-second">
              <img
                className="diferencial-text-footer-icon"
                src={secondIcon}
                alt="secondIcon"
              />
              <div className="diferencial-text-footer-title">Rastreador</div>
              <div className="diferencial-text-footer-content">
                Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos
                rastreadores e sistemas anti-furto para garantir o seu sossego.
              </div>
            </div>
          </div>
        </div>
        <img
          src={diferencial}
          alt="diferencial"
          className="diferencial-img"
        ></img>
      </div>
      <div className="partners-container">
        <div className="partners-title">Nossos parceiros</div>

        <div className="partners-img-container">
          <div className="partners-row horizontal-line">
            <div className="partners-img partners-img-first  partners-img-first-top">
              <img src={ranek} alt="ranek" />
            </div>
            <div className="partners-img partners-img-second partners-img-second-top">
              <img src={caravan} alt="caravan" />
            </div>
            <div className="partners-img partners-img-third partners-img-third-top">
              <img src={dogs} alt="dogs" />
            </div>
            <div className="partners-img partners-img-last partners-img-last-top">
              <img src={handel} alt="handel" />
            </div>
          </div>

          <div className="partners-row partners-row-second">
            <div className="partners-img partners-img-first">
              <img src={surfbot} alt="surfbot" />
            </div>
            <div className="partners-img partners-img-second">
              <img src={wildbeast} alt="wildbeast" />
            </div>
            <div className="partners-img partners-img-third">
              <img src={flexblog} alt="flexblog" />
            </div>
            <div className="partners-img partners-img-last">
              <img src={lescone} alt="lescone" />
            </div>
          </div>
        </div>
      </div>

      <div className="response-container">
        <div className="response-img">
          <img src={partners} alt="depoimento" />
        </div>
        <div className="response-content-container">
          <img className="response-dec-first" src={dec} alt="dec" />
          <div className="response-text">
            <div className="response-text-mark-first">
              <img src={quotationMarck} alt="quotationMarck" />
            </div>

            <div className="response-text-container">
              Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez
              foi intensificar o meu amor por esta atividade. Recomendo à todos
              que amo.{" "}
            </div>

            <div className="response-text-mark-second">
              <img src={quotationMarck} alt="quotationMarck" />
            </div>
            <div className="response-author">Ana Júlia</div>
          </div>
          <img className="response-dec-second" src={dec} alt="dec" />
        </div>
      </div>

      <div className="support-container">
        <div className="support-title">seguros</div>
        <div className="support-options">
          <SupportCard
            title={"PRATA"}
            list={[
              "Duas trocas por ano",
              "Assistência técnica",
              "Suporte 08h às 18h",
              "Cobertura estatual",
            ]}
            price={"R$ 199"}
            isGold={false}
          />
          <SupportCard
            title={"OURO"}
            list={[
              "Cinco trocas por ano",
              "Assistência especial",
              "Suporte 24h",
              "Cobertura nacional",
              "Descontos em parceiros",
              "Acesso ao Clube Bikecraft",
            ]}
            price={"R$ 299"}
            isGold={true}
          />
        </div>
        <img className="support-dec" src={dec} alt="dec" />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
