
import "./segurosPage.scss";
import Footer from "../../components/footer/Footer";
import { SupportCard } from "../../components/support-card/SupportCard";
import { dataAdvantages } from "../../components/arrayAdvantages/arrayAdvantages"

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
            {dataAdvantages.map((item)=> (
              <div className="seguro-advantages-item-box">
                <img
                  className="seguro-advantages-item-img"
                  src={item.img}
                  alt={item.alt}
                />
                <div className="seguro-advantages-item-title">
                 {item.title}
                </div>
                <div className="seguro-advantages-item-description">
                 {item.description}
                </div>
              </div>
            ))}
              
            
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
