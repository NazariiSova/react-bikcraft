import React from "react";
import "./homePage.scss";
import imgIntro from "./imgHome/img-intro.png";
import dec from "./imgHome/dec.svg"
import bicicleta1 from "./imgHome/bicicleta1.png"
import bicicleta2 from "./imgHome/bicicleta2.png"
import bicicleta3 from "./imgHome/bicicleta3.png"

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
                        <img className="catalog-card-img" src={bicicleta2 } alt="" />
                        <div className="catalog-card-description">Magic Migth</div>
                        <div className="catalog-card-price">R$ 2499</div>
                    </div>
                    <div className="catalog-card-item">
                        <img className="catalog-card-img" src={bicicleta1 } alt="" />
                        <div className="catalog-card-description">Nimbus Stark</div>
                        <div className="catalog-card-price">R$ 4909</div>
                    </div>
                    <div className="catalog-card-item">
                        <img className="catalog-card-img" src={bicicleta3 } alt="" />
                        <div className="catalog-card-description">Nebula Cosmic</div>
                        <div className="catalog-card-price">R$ 3999 </div>
                    </div>
                </div>
            </div>

        </div>

    )
};

export default HomePage;