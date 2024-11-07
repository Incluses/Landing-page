import style from "./Grafic.module.css";
import Navbar from "../navbar2/Navbar";
import React, { useState, useEffect } from "react";
import temaClaro from "../../assets/modoClaro.png";
import temaEscuro from "../../assets/modoEscuro.png";

function Grafic() {
  const pegarTemaAtual = () => {
    const storedColor = localStorage.getItem("backgroundColor");
    return storedColor ? storedColor : "white";
  };

  const [fundoDiv, setFundoDiv] = useState(pegarTemaAtual());
  const [backgroundColor, setBackgroundColor] = useState(pegarTemaAtual());

  const trocarTemaAtual = (novaCor) => {
    setBackgroundColor(novaCor);
    localStorage.setItem("backgroundColor", novaCor);
  };

  const trocarCor = () => {
    const novaCor = backgroundColor === "white" ? "black" : "white";
    trocarTemaAtual(novaCor);
  };

  const handleTabPress = (event) => {
    if (event.key === "k" || event.key === "K") {
      trocarCor();
      console.log("passou");
    }
  };

  const handleTabPress2 = (event) => {
    if (event.key === "k" || event.key === "K") {
      trocarCor();
      console.log("passou");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleTabPress);

    return () => {};
  }, [backgroundColor]);

  return (
    <div
      className={style.geral}
      style={{ backgroundColor: pegarTemaAtual() }}
      value={fundoDiv}
    >
      <Navbar color1="#2B46D3" color2="#2B46D3" trocarCor={trocarCor}></Navbar>
      <div id={style.main}>
        <iframe
          title="bi_incluses_desktop"
          width="80%"
          height="673.5"
          src="https://app.powerbi.com/view?r=eyJrIjoiYjlkMjgwOTEtYmQwMC00ZWUxLTk1YzMtMzY3ZWFiMmM4M2I4IiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
        <iframe
          title="bi_incluses_terceiro_ano"
          width="80%"
          height="873.5"
          src="https://app.powerbi.com/view?r=eyJrIjoiYzYyODMxZjQtYWRkZi00YTY5LWE1YTQtOGM2ZTJkMzQ2ZWZiIiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    </div>
  );
}

export default Grafic;
