import style from "./Infos.module.css";
import Navbar from "../navbar2/Navbar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Infos() {


    const pegarTemaAtual = () => {
        const storedColor = localStorage.getItem('backgroundColor');
        return storedColor ? storedColor : 'white';
    };

    const [backgroundColor, setBackgroundColor] = useState(pegarTemaAtual());

    const trocarTemaAtual = (novaCor) => {
        setBackgroundColor(novaCor);
        localStorage.setItem('backgroundColor', novaCor);
    };

    const trocarCor = () => {
        const novaCor = backgroundColor === 'white' ? 'black' : 'white';
        trocarTemaAtual(novaCor);
    };

    useEffect(() => {
        document.body.style.backgroundColor = backgroundColor;
    }, [backgroundColor]);

    return (
        <div style={{ backgroundColor: backgroundColor }}>
            <Navbar color2="#2B46D3" color1="#2B46D3" trocarCor={trocarCor}></Navbar>
        </div>
    );
}

export default Infos;
