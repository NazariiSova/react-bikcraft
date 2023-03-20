import React from "react";
import "./homePage.scss";
import imgIntro from "./imgHome/img-intro.png";
import dec from "./imgHome/dec.svg"
import { Link } from "react-router-dom";

import bicicleta1 from "./imgHome/bicicleta1.png"
import bicicleta2 from "./imgHome/bicicleta2.png"
import bicicleta3 from "./imgHome/bicicleta3.png"

import firstIcon from "./imgHome/first.png"
import secondIcon from "./imgHome/second.png"
import diferencial from "./imgHome/diferencial.png"

const HomePage = () => {
    return (
        <div className="home-container">

            <div className="header-post">

                <img className="header-post-dec" src={dec} alt="dec" />
                <div className="header-post-text">

                    <div className="header-post-title">bicicletas feitas sob medida<span className="orange-point">.</span></div>
                    <div className="header-post-description">Bicicletas elétricas de alta precisão e qualidade,  feitas sob medida para o cliente. Explore o mundo na sua velocidade com a Bikcraft.</div>
                    <button className="header-post-button">Selecione a sua</button>
                </div>
                <img src={imgIntro} alt="img-intro" />

            </div>

            <div className="catalog-container">
                <div className="catalog-title">escohola a sua<span className="orange-point">.</span></div>
                <div className="catalog-cards">
                    <div className="catalog-card-item">
                        <img className="catalog-card-img" src={bicicleta2} alt="" />
                        <div className="catalog-card-description">Magic Migth</div>
                        <div className="catalog-card-price">R$ 2499</div>
                    </div>
                    <div className="catalog-card-item">
                        <img className="catalog-card-img" src={bicicleta1} alt="" />
                        <div className="catalog-card-description">Nimbus Stark</div>
                        <div className="catalog-card-price">R$ 4909</div>
                    </div>
                    <div className="catalog-card-item">
                        <img className="catalog-card-img" src={bicicleta3} alt="" />
                        <div className="catalog-card-description">Nebula Cosmic</div>
                        <div className="catalog-card-price">R$ 3999 </div>
                    </div>
                </div>
            </div>
            <div className="diferencial-container">

                <div className="diferencial-text-container">
                    <div className="diferencial-text-title">Tecnologia avançada</div>
                    <div className="diferencial-text-subtitle">Você escolhe as suas cores e componentes<span className="orange-point">.</span></div>
                    <div className="diferencial-text-content">Cada Bikcraft é única e possui a sua identidade. As medidas serão exatas para o seu corpo e altura, garantindo maior conforto e ergonomia na sua pedalada. Você pode também personalizar completamente as suas cores.</div>
                    <Link className="headlines diferencial-text-button" to="/bicicleta-interna">ESCOLHA UM MODELO</Link>
                    <div className="diferencial-text-button-underline"></div>
                    <div className="diferencial-text-footer-container">
                        <div className="diferencial-text-first">
                            <img className="diferencial-text-footer-icon" src={firstIcon} alt="firstIcon" />
                            <div className="diferencial-text-footer-title">Motor Elétrico</div>
                            <div className="diferencial-text-footer-content">Toda Bikcraft é equipada com um motor elétrico que possui duração de até 120h. A bateria é recarregada com a sua energia gasta ao pedalar.
                            </div>
                        </div>
                        <div className="diferencial-text-second">
                            <img className="diferencial-text-footer-icon" src={secondIcon} alt="secondIcon" />
                            <div className="diferencial-text-footer-title">Rastreador</div>
                            <div className="diferencial-text-footer-content">Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e sistemas anti-furto para garantir o seu sossego.
                            </div>
                        </div>
                    </div>
                </div>
                <img src={diferencial} alt="diferencial" className="diferencial-img"></img>

            </div>
            <div className="partners-container">
                <div className="partners-title">Nossos parceiros<span className="orange-point">.</span></div>
            </div>


        </div>

    )
};

export default HomePage;