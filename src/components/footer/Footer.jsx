import React from 'react';
import { Link } from "react-router-dom";
import "./footer.scss"
import instagram from "./imgSocial/instagram.png"
import facebook from './imgSocial/facebook.png'
import youtube from "./imgSocial/youtube.png"


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-content">

                <div className="footer-bikcraft"><Link className="footer-bikcraft" to="/">bikcraft</Link></div>
                <div className="footer-info">
                    <div className="footer-info-title">Contato</div>
                    <div className="footer-info-list">
                        <ul className="footer-info-ul">
                            <li>
                                <a className='footer-info-li' href="tel:+5522999999999">+55 22 99999-9999</a>
                            </li>
                            <li>
                                <a className='footer-info-li' href="mailto:contato@bikcraft.com">contato@bikcraft.com</a>
                            </li>
                        </ul>
                        <ul className="footer-info-ul">
                            <li>Rua Ali Perto, 42 - Botafogo</li>
                            <li>Rio de Janeiro - RJ</li>
                        </ul>
                    </div>
                    <div className="footer-info-icon-container">
                        <img src={instagram} alt="instagram" />
                        <img src={facebook} alt="facebook" />
                        <img src={youtube} alt="youtube" />
                    </div>
                </div>
                <div className="footer-link-container">
                    <div className="footer-link-title">INFORMAÇÕES</div>
                    <div className="footer-link-list">
                        <Link className="footer-link-item" to="/bicicletas">Bicicletas</Link>
                        <Link className="footer-link-item" to="/seguros">Seguros</Link>
                        <Link className="footer-link-item" to="/contato">Contato</Link>
                        <Link className="footer-link-item" to="/termos">Termos e Condições</Link>
                    </div>
                </div>

            </div>

            <div className="footer-description">Bikcraft © Alguns rireitos reservados.</div>

        </div>
    );
};

export default Footer;