import React from "react";
import { useState } from "react";
import "./contatoPage.scss";
import { ContactCard } from "../../components/ContactCard/ContactCard.jsx";

import facebook from "../../components/img/Icons/facebook.png";
import instagram from "../../components/img/Icons/instagram.png";
import map from "../../components/img/Icons/map.png";
import messageImg from "../../components/img/Icons/message.png";
import phoneImg from "../../components/img/Icons/phone.png";
import youtube from "../../components/img/Icons/youtube.png";

import dec from "../../components/img/dec.svg";
import rio from "../../components/img/rio.png";
import sp from "../../components/img/sp.png";
import Footer from "../../components/footer/Footer";

export const ContatoPage = () => {
  const [isName, setIsName] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isMail, setIsMail] = useState(false);
  
  const [isDisabled, setIsDisabled] = useState(true);

  const [ValueName, setValueName] = useState(" ");
  const [ValuePhone, setValuePhone] = useState(" ");
  const [ValueMail, setValueMail] = useState(" ");
 
const handlerClick = () => {
 console.log(ValueName, ValuePhone, ValueMail);
};
  const handlerChangeName = (event) => {
    const value = event.target.value;

    if (value.length > 0) {
      setIsName(true); 
      setValueName(value);
    } else {
      setIsName(false);
    }
    setIsDisabled(value.length === 0);
    
  };
  const handlerChangePhone = (event) => {
    const value = event.target.value;

    if (value.length > 0) {
      setIsPhone(true); 
      setValuePhone(value);
    } else {
      setIsPhone(false);
    }
    setIsDisabled(value.length === 0);
    
  };
  const handlerChangeMail = (event) => {
    const value = event.target.value;

    if (value.length > 0) {
      setIsMail(true); 
      setValueMail(value);
    } else {
      setIsMail(false);
    }
    setIsDisabled(value.length === 0);
    
  };


  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <div className="contacts-header-title-small">RESPOSTAS EM ATÉ 24H</div>
        <div className="contacts-header-title">nosso contato</div>
      </div>
      <div className="contacts-shops-login-container">
        <div className="contacts-shops">
          <div className="contacts-shops-title">Loja Online</div>
          <div className="contacts-shops-location">
            <img scr={map} alt="map" className="contacts-shops-img" />
            <ul className="contacts-shops-location-list">
              <li>Rua Ali Perto, 35 </li>
              <li>Rio de Janeiro - RJ</li>
              <li>Brasil - Terra - Vila Láctea</li>
            </ul>
          </div>
          <div className="contacts-shops-mail">
            <img
              className="contacts-shops-mail-img"
              src={messageImg}
              alt="mail"
            />
            <ul className="contacts-shops-mail-list">
              <li>vendas@bikcraft.com</li>
              <li>assistencia@bikcraft.com</li>
            </ul>
          </div>
          <div className="contacts-shops-phone">
            <img
              className="contacts-shops-phone-img"
              src={phoneImg}
              alt="phone"
            />
            +55 22 99999-9999
          </div>
          <div className="contacts-shops-social">
            <img src={instagram} alt="instagram" />
            <img src={youtube} alt="youtube" />
            <img src={facebook} alt="facebook" />
          </div>
          <img className="contacts-shops-dec" src={dec} alt="dec" />
        </div>

        <form className="contacts-login">
          <div className="contacts-login-first-inputs">
            <div className="contacts-login-name-box">
              <div className="contacts-login-name-title">Nome</div>
              <input
                className="contacts-login-name-input"
                placeholder="Seu nome"
                onChange={handlerChangeName}
              />
            </div>
            <div className="contacts-login-phone-box">
              <div className="contacts-login-phone-title">Telefone</div>
              <input
                className="contacts-login-phone-input"
                placeholder="(22) 99999-9999"
                type="tel"
                name="phone"
                required
                onChange={handlerChangePhone}
              />
            </div>
          </div>
          <div className="contacts-login-email-box">
            <div className="contacts-login-email-title">Email</div>
            <input
              className="contacts-login-email-input"
              type="email"
              name="email"
              required
              placeholder="Seu email"
              onChange={handlerChangeMail}
            />
          </div>
          <div className="contacts-login-message-box">
            <div className="contacts-login-message-title">Mensagem</div>
            <textarea
              className="contacts-login-message-input"
              placeholder="Digite sua mensagem"
            />
          </div>
          <button
            className="contacts-login-submit-button"
            type="submit"
            disabled={isDisabled}
            onClick={handlerClick}
          >
            Enviar Mensagem
          </button>
          <img className="contacts-login-dec" src={dec} alt="dec" />
        </form>
      </div>
      <div className="contacts-card-container">
        <div className="contacts-card-main-title">loja locais</div>
        <div className="contacts-cards-container">
          <ContactCard
            img={rio}
            alt={"Rio"}
            title={"Rio de Janeiro"}
            listLocation={["Rua Ali Perto, 25", "Rio de Janeiro - RJ"]}
            listContacts={["rio@bikcraft.com", "21 99999-9999"]}
            time={"08-18h seg à dom"}
          />
          <ContactCard
            img={sp}
            alt={"SP"}
            title={"São Paulo"}
            listLocation={["Rua Ali Perto, 25", "São Paulo - SP"]}
            listContacts={["sp@bikcraft.com", "11 99999-9999"]}
            time={"08-18h seg à dom"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
