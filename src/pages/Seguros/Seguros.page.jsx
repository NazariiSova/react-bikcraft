import React, { useState } from "react";
import "./segurosPage.scss";
import Footer from "../../components/footer/Footer";
import { SupportCard } from "../../components/support-card/SupportCard";

import bike from "../../components/img/Icons/bike.png";
import leaf from "../../components/img/Icons/leaf.png";
import lock from "../../components/img/Icons/lock.png";
import material from "../../components/img/Icons/material.png";
import speed from "../../components/img/Icons/speed.png";
import traker from "../../components/img/Icons/tracker.png";
import { DropDownFAQ } from "../../components/dropDownFAQ/DropDownFAQ";


const SegurosPage = () => {
  const dropdownQuestionArr = [
    "qual forma de pagamento vocês aceitam?",
    "Como posso entrar em contato?",
    "Vocês possuem algum desconto?",
    "Qual garantia que possuo? ",
    "Posso parcelar no boleto?",
    "Quantas trocas posso fazer ao ano? ",
    "Qual BikCraft devo escolher para o meu tamanho? ",
  ];
  
  return (
    <div className="bicicletas-page-container">
      <div className="header-container">
        <div className="header-small-text">ESCOLHA O SEGURO </div>
        <div className="header-title">você seguro</div>
      </div>
      <div className="seguro-container">
        <div className="seguro-support-card">
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
        <div className="seguro-advantages-container">
          <div className="seguro-advantages-title">nossas vantagens</div>
          <div className="seguro-advantages-margins-container">
            <div className="seguro-advantages-items-container">
              <div className="seguro-advantages-item-box">
                <img
                  className="seguro-advantages-item-img"
                  src={bike}
                  alt="bike"
                />
                <div className="seguro-advantages-item-title">
                  Reparo Elétrico
                </div>
                <div className="seguro-advantages-item-description">
                  Garantimos o reparo competo do seu motor em caso de falhas.
                  Sabemos que falhas são raras, mas estamos aqui caso ocorra.
                </div>
              </div>
              <div className="seguro-advantages-item-box">
                <img
                  className="seguro-advantages-item-img"
                  src={material}
                  alt="material"
                />
                <div className="seguro-advantages-item-title">
                  Reparo de Quadro
                </div>
                <div className="seguro-advantages-item-description">
                  Nossos quadros são feitos para durar para sempre. Mas caso
                  algo ocorra, ficamos felizes em reparar.
                </div>
              </div>
              <div className="seguro-advantages-item-box">
                <img
                  className="seguro-advantages-item-img"
                  src={leaf}
                  alt="support"
                />
                <div className="seguro-advantages-item-title">Sustentável</div>
                <div className="seguro-advantages-item-description">
                  Trabalhamos com a filosofia de desperdício zero. Qualquer
                  parte defeituosa é reciclada e reutilizada em outro projeto.
                </div>
              </div>
              <div className="seguro-advantages-item-box">
                <img
                  className="seguro-advantages-item-img"
                  src={traker}
                  alt="tracker"
                />
                <div className="seguro-advantages-item-title">Recuperação</div>
                <div className="seguro-advantages-item-description">
                  Recuperamos Bikcrafts roubadas sem custo adicional para o
                  dono. Se não conseguirmos recuperar, damos uma nova para você.
                </div>
              </div>
              <div className="seguro-advantages-item-box">
                <img
                  className="seguro-advantages-item-img"
                  src={lock}
                  alt="Safety"
                />
                <div className="seguro-advantages-item-title">Segurança</div>
                <div className="seguro-advantages-item-description">
                  O nosso seguro garante que todo reparo seja feito com peças
                  genuínas e de alta qualidade. Confie na Bikcraft.
                </div>
              </div>
              <div className="seguro-advantages-item-box">
                <img
                  className="seguro-advantages-item-img"
                  src={speed}
                  alt="speed"
                />
                <div className="seguro-advantages-item-title">Rapidez</div>
                <div className="seguro-advantages-item-description">
                  A sua Bikcraft ficará pronta para uso no mesmo dia, caso você
                  traga ela para ser reparada em uma das filiais.
                </div>
              </div>
            </div>
          </div>
          <div className="seguro-FAQ-container">
            <div className="seguro-FAQ-box">
              <div className="seguro-FAQ-title">perguntas frequentes</div>
              <div className="seguro-FAQ-dropdown ">
                {dropdownQuestionArr.map((question, i) => (
                  <DropDownFAQ question={question} key={i} i={i}/>
                 
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SegurosPage;
