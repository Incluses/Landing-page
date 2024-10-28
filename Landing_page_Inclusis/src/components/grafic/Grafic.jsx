import style from "./Grafic.module.css"
import Navbar from "../navbar2/Navbar"
import React, { useState, useEffect } from 'react';

function Grafic(){

    const pegarTemaAtual = () => {
        const storedColor = localStorage.getItem('backgroundColor');
        return storedColor ? storedColor : 'white';
  }

  const [fundoDiv, setFundoDiv] = useState(pegarTemaAtual())
  const [backgroundColor, setBackgroundColor] = useState(pegarTemaAtual());

  const trocarTemaAtual = (novaCor) => {
    setBackgroundColor(novaCor);
    localStorage.setItem('backgroundColor', novaCor)
  }
    

 
  const trocarCor = () => {
    const novaCor = backgroundColor === 'white' ? 'black' : 'white';
    trocarTemaAtual(novaCor)

  };


    return(
        <div className={style.geral} style={{backgroundColor:pegarTemaAtual()}} value={fundoDiv}>
            <Navbar color1="#2B46D3" color2="#2B46D3" trocarCor={trocarCor}></Navbar>
            <div id={style.main}>
            <iframe title="bi_incluses" width="75%" height="721.25" src="https://app.powerbi.com/reportEmbed?reportId=7dc4c68a-be3b-4e8d-9b09-ac92f749ba3f&autoAuth=true&ctid=b148f14c-2397-402c-ab6a-1b4711177ac0" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </div>
    )
}

export default Grafic
