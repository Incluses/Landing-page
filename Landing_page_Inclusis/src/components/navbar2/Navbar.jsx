import style from "./Navbar.module.css"
import BotaoNav from "../botaoNav/BotaoNav"
import pesquisar from "../../assets/pesquisar.png"
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Navbar({color1,color2}){

    const navigate = useNavigate();
    
    const goToGrafic = () => {
        navigate('/grafic')
    }

    const goToInfos = () => {
        navigate('/infos')
    }
    return(
        <div className={style.cabecalho}>
                <p className={style.logo}>Incluses</p>
                <nav className={style.nav}>
                    <div onClick={() => {goToGrafic()}}>
                        <BotaoNav text="Power BI" color={color1} onClick={goToGrafic()}></BotaoNav>
                    </div>
                    <div onClick={() => {goToInfos()}}>
                        <BotaoNav text="Informações" color={color2}></BotaoNav>
                    </div>
                </nav>
                <div className={style.inputGeral}>
                    <input type="text" placeholder="Pesquisar" className={style.input}></input>
                    <img src={pesquisar} className={style.pesquisar}></img>
                </div>
            </div>
    )
}

export default Navbar