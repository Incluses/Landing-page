import style from "./Navbar.module.css";
import BotaoNav from "../botaoNav/BotaoNav";
import pesquisar from "../../assets/pesquisar.png";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import temaClaro from "../../assets/modoClaroEscuro.png";
import temaEscuro from "../../assets/modoClaroEscuro.png";

function Navbar({ color1, color2, trocarCor }) {
  const [srcAtual, setSrcAtual] = useState(temaClaro);

  const alternarImagem = (novaCor) => {
    setSrcAtual((prevSrc) => (prevSrc === temaClaro ? temaEscuro : temaClaro));
  };

  const handleTabPress = (event) => {
    if (event.key === "k" || event.key === "K") {
      alternarImagem();
      console.log("passou");
    }
  };

  const navigate = useNavigate();

  const goToGrafic = () => {
    navigate("/grafic");
  };

  const goToTermos = () => {
    navigate("/termosdeprivacidade");
  };

  const goToInfos = () => {
    navigate("/infos");
  };

  const goToMain = () => {
    navigate("/");
  };
  return (
    <div className={style.cabecalho}>
      <nav className={style.nav}>
        <p
          className={style.logo}
          onClick={() => {
            goToMain();
          }}
        >
          Incluses
        </p>
        <div id={style.botoes}>
          <div
            onClick={() => {
              goToGrafic();
            }}
          >
            <BotaoNav text="Power BI" color={color1}></BotaoNav>
          </div>
        </div>
        <img
          src={srcAtual}
          id={style.tema}
          onClick={() => {
            alternarImagem();
            trocarCor();
          }}
        ></img>
      </nav>
    </div>
  );
}

export default Navbar;
