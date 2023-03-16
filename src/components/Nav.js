import React from "react";
import { Link } from "react-router-dom";
import headlines from "./headlines.module.scss"



const Nav = () => {
    return (
        <header>
            <div className={headlines["container"]} >

                <Link className={headlines["headlines headline-bikcraft"]} to="/">bikcraft</Link>
                <Link className={headlines["headlines"]} to="/bicicletas">Bicicletas</Link>
                <Link className={headlines["headlines"]} to="/bicicleta-interna"></Link>
                <Link className={headlines["headlines"]} to="/seguros">Seguros</Link>
                <Link className={headlines["headlines"]} to="/contato">Contato</Link>
                <Link className={headlines["headlines"]} to="/termos"></Link>

            </div>

        </header>

    );

};

export default Nav;