import style from "./CardArea.module.css";
import Button from "../botaoPrincipal/BotaoPrincipal";

function CardArea({ imgSrc, title, text, textBotton }) {
  return (
    <div className={style.card}>
      <div id={style.cardInterno}>
        <img src={imgSrc} id={style.img}></img>
        <h1 id={style.title}>{title}</h1>
        <p id={style.texto}>{text}</p>
        <div id={style.botao}>{textBotton}</div>
      </div>
    </div>
  );
}

export default CardArea;
