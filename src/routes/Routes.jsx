import React from "react";
import Header from "../components/header/Header";

import { Route, Routes as RouterRoutes } from "react-router-dom";

import HomePage from "../pages/Home/Home.page";
import SegurosPage from "../pages/Seguros/Seguros.page";
import TermosPage from "../pages/Termos/Termos.page";
import { ContatoPage }  from "../pages/Contato/Contato.page";
import BicicletasPage from "../pages/Bicicletas/Bicicletas.page";
import BicicletaInternaPage from "../pages/Bicicleta-interna/Bicicleta-interna.page";


const Routes = () => {
    return (
        <div>

            <Header />

           <RouterRoutes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bicicletas" element={<BicicletasPage />} />
                <Route path="/bicicleta-interna" element={<BicicletaInternaPage />} />
                <Route path="/seguros" element={<SegurosPage />} />
                <Route path="/contato" element={<ContatoPage />} />
                <Route path="/termos" element={<TermosPage />} />
            </RouterRoutes>

           
        </div>
    )
};




export default Routes;

