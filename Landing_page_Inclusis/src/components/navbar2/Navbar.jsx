import style from "./Navbar.module.css"
import BotaoNav from "../botaoNav/BotaoNav"
import pesquisar from "../../assets/pesquisar.png"
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import temaClaro from "../../assets/botaotemaclaro.png"
import temaEscuro from "../../assets/modoEscuro2.png"

function Navbar({color1, color2, trocarCor}){

    const [srcAtual, setSrcAtual] = useState(temaClaro);

    const alternarImagem = (novaCor) => {
        setSrcAtual((prevSrc) => (prevSrc === temaClaro ? temaEscuro : temaClaro));
    };


    const navigate = useNavigate();

    const goToGrafic = () => {
        navigate('/grafic')
    }

    const goToInfos = () => {
        navigate('/infos')
    }

    const goToMain = () => {
        navigate('/')
    }
    return(
        <div className={style.cabecalho} >
                <p className={style.logo} onClick={() => {goToMain()}}>Incluses</p>
                <nav className={style.nav}>
                    <div onClick={() => {goToGrafic()}}>
                        <BotaoNav text="Power BI" color={color1} onClick={goToGrafic()}></BotaoNav>
                    </div>
                    <div onClick={() => {goToInfos()}}>
                        <BotaoNav text="Informações" color={color2}></BotaoNav>
                    </div>
                    <img src={srcAtual} id={style.tema} onClick={() => {
                        alternarImagem() 
                        trocarCor()}}></img>
                    
                    
                </nav>
            </div>
    )
}

export default Navbar