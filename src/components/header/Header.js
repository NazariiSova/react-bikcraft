import React from "react";
import { Link } from "react-router-dom";
import "./headlines.scss"



const Header = () => {
    return (
        <header>
            <div className="container" >

                <Link className="headlines headlines-bikcraft" to="/">bikcraft</Link>

                <div className="headlines-others-container">
                    <Link className="headlines headlines-others" to="/bicicletas">Bicicletas</Link>
                    <Link className="headlines" to="/seguros">Seguros</Link>
                    <Link className="headlines" to="/contato">Contato</Link>
                </div>
                
                <Link className="headlines" to="/bicicleta-interna"></Link>
                <Link className="headlines" to="/termos"></Link>

            </div>


        </header>

    );

};

export default Header;