import React from "react";
import "./segurosPage.scss";
import Footer from "../../components/footer/Footer";
import { SupportCard } from "../../components/support-card/SupportCard";

const SegurosPage = () => {
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
          <div className="seguro-advantages-items-container">
            <div className="seguro-advantages-item-box">
                <img className="seguro-advantages-item-img" src="" alt="bike" />
                <div className="seguro-advantages-item-title"></div>
                <div className="seguro-advantages-item-description"></div>
            </div>
            <div className="seguro-advantages-item-box">
                <img className="seguro-advantages-item-img" src="" alt="material" />
                <div className="seguro-advantages-item-title"></div>
                <div className="seguro-advantages-item-description"></div>
            </div>
            <div className="seguro-advantages-item-box">
                <img className="seguro-advantages-item-img" src="" alt="support" />
                <div className="seguro-advantages-item-title"></div>
                <div className="seguro-advantages-item-description"></div>
            </div>
            <div className="seguro-advantages-item-box">
                <img className="seguro-advantages-item-img" src="" alt="tracker" />
                <div className="seguro-advantages-item-title"></div>
                <div className="seguro-advantages-item-description"></div>
            </div>
            <div className="seguro-advantages-item-box">
                <img className="seguro-advantages-item-img" src="" alt="Safety" />
                <div className="seguro-advantages-item-title"></div>
                <div className="seguro-advantages-item-description"></div>
            </div>
            <div className="seguro-advantages-item-box">
                <img className="seguro-advantages-item-img" src="" alt="speed" />
                <div className="seguro-advantages-item-title"></div>
                <div className="seguro-advantages-item-description"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SegurosPage;
