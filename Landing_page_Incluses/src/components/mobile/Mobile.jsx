import style from "./Mobile.module.css";
import logo from "../../assets/Group 184.png";

function Mobile() {
  return (
    <div className={style.main}>
      <img src={logo} id={style.logo}></img>
      <iframe
        title="bi_incluses_desktop"
        width="600"
        height="673.5"
        src="https://app.powerbi.com/view?r=eyJrIjoiYTBlYzZjMGYtM2U1OC00ZDNlLTg4N2UtYTcyZTgxM2E4OTcwIiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}

export default Mobile;
