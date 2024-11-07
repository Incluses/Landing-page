import style from "./BotaoPrincipal.module.css";

function BotaoPrincipal({
  backgroundColor,
  text,
  marginTop,
  marginBotton,
  onClick,
}) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        marginTop: marginTop,
        marginBottom: marginBotton,
      }}
      className={style.botao}
      onClick={onClick}
    >
      <p>{text}</p>
    </div>
  );
}

export default BotaoPrincipal;
