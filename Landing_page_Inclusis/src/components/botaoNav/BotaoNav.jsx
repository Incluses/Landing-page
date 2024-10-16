import style from "./BotaoNav.module.css"
import setaBaixo from "../../assets/setaBaixo.png"
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function BotaoNav({text,color}){
    return(
        <div className={style.geral}>
            <p className={style.text} style={{color:color}}>{text}</p>
            <img src={setaBaixo} alt="seta para baixo" className={style.img}/>
        </div>
    )
}

export default BotaoNav