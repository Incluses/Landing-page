import Button from "react-bootstrap/Button";
import style from "./BotaoDois.module.css";

function BotaoDois({ onClick }) {
  return (
    <>
      <Button onClick={onClick} className={style.botaoDois} variant="primary">
        Empresa
      </Button>{" "}
    </>
  );
}

export default BotaoDois;
