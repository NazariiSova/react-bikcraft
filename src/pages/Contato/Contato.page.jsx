import React from "react";
import "./contatoPage.scss";

import facebook from "../../components/img/Icons/facebook.png";
import instagram from "../../components/img/Icons/instagram.png";
import map from "../../components/img/Icons/map.png";
import message from "../../components/img/Icons/message.png";
import phone from "../../components/img/Icons/phone.png";
import youtube from "../../components/img/Icons/youtube.png";
import dec from "../../components/img/dec.svg";

const ContatoPage = () => {
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
            <img className="contacts-shops-mail-img" src={message} alt="mail" />
            <ul className="contacts-shops-mail-list">
              <li>vendas@bikcraft.com</li>
              <li>assistencia@bikcraft.com</li>
            </ul>
          </div>
          <div className="contacts-shops-phone">
            <img className="contacts-shops-phone-img" src={phone} alt="phone" />
            +55 22 99999-9999
          </div>
          <div className="contacts-shops-social">
            <img src={instagram} alt="instagram" />
            <img src={youtube} alt="youtube" />
            <img src={facebook} alt="facebook" />
          </div>
          <img className="contacts-shops-dec" src={dec} alt="dec" />
        </div>

        <div className="contacts-login">
          <div className="contacts-login-first-inputs">
            <div className="contacts-login-name-box">
              <div className="contacts-login-name-title">Nome</div>
              <input
                className="contacts-login-name-input"
                placeholder="Seu nome"
              ></input>
            </div>
            <div className="contacts-login-phone-box">
              <div className="contacts-login-phone-title">Telefone</div>
              <input
                className="contacts-login-phone-input"
                placeholder="(22) 99999-9999"
              ></input>
            </div>
          </div>
          <div className="contacts-login-email-input">
            <div className="contacts-login-email-title">Email</div>
            <input
              className="contacts-login-email-input"
              placeholder="contato@email.com"
            ></input>
          </div>
          <div className="contacts-login-message-input">
            <div className="contacts-login-message-title">Mensagem</div>
            <input
              className="contacts-login-message-input"
              placeholder="O que você precisa?"
            ></input>
          </div>
          <button className="contacts-login-btn">ENVIAR MENSAGEM</button>
          <img src={dec} alt="dec" />
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;
