import style from "./Infos.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from "../navbar2/Navbar";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Infos() {

    const pegarTemaAtual = () => {
        const storedColor = localStorage.getItem('backgroundColor');
        return storedColor ? storedColor : 'white';
    }

    const [backgroundColor, setBackgroundColor] = useState(pegarTemaAtual());

    const trocarTemaAtual = (novaCor) => {
        setBackgroundColor(novaCor);
        localStorage.setItem('backgroundColor', novaCor)
    }

    const [imageSrc, setImageSrc] = useState(null);

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImageSrc(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    const submmit = (e) => {
        e.preventDefault();
      }

    
    return (
        <div style={{ backgroundColor: backgroundColor }}>
            <Navbar color2="#2B46D3" color1="#2B46D3"></Navbar>
            <Form onSubmit={() => {submmit()}}>
                <label for="fileInput">Selecione uma imagem</label>
                <input type="file" id="fileInput" accept="image/*" onChange={() => {handleImageChange()}}></input>
            </Form>
            {imageSrc && (
            <img src={imageSrc} alt="Pré-visualização da Imagem" style={{ maxWidth: '300px' }} />
            )}
        </div>
    );
}

export default Infos;
