import React from "react";
import "./contatoPage.scss"

import facebook from "../../components/img/Icons/facebook.png"
import instagram from "../../components/img/Icons/instagram.png"
import map from "../../components/img/Icons/map.png"
import message from "../../components/img/Icons/message.png"
import phone from "../../components/img/Icons/phone.png"
import toutube from "../../components/img/Icons/toutube.png"

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
                        <img className="contacts-shops-img"></img>
                        <ul className="contacts-shops-location-list">

                        </ul>
                    </div>
                </div>

                <div className="contacts-login"></div>
            </div>
        </div>
    )
};

export default ContatoPage;