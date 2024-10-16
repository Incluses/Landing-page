import style from "./Navbar.module.css"
import BotaoNav from "../botaoNav/BotaoNav"
import pesquisar from "../../assets/pesquisar.png"
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Navbar({color1,color2}){

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // Acessar informações do evento:
        console.log('Tipo de evento:', e.type); // Tipo de evento (ex: "change")
        console.log('Valor do input:', e.target.value); // Valor atual do input
        console.log('Elemento alvo:', e.target); // Referência ao elemento DOM (input)

        setInputValue(e.target.value);
    };

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
                    <input type="text" placeholder="Pesquisar" className={style.input} value={inputValue} onChange={handleInputChange}></input>
                    <img src={pesquisar} className={style.pesquisar}></img>
                </div>
            </div>
    )
}

export default Navbar