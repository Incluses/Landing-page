import style from "./Mobile.module.css"
import logo from "../../assets/Group 184.png"

function Mobile(){
    return(
        <div className={style.main}>
            <img src={logo} id={style.logo}></img>
            <iframe title="bi_incluses_mobile" 
            width="100%" 
            height="541.25" 
            src="https://app.powerbi.com/reportEmbed?reportId=33f337d2-31b6-45de-96eb-e6e7aafaaca4&autoAuth=true&ctid=b148f14c-2397-402c-ab6a-1b4711177ac0" 
            frameborder="0" 
            allowFullScreen="true"></iframe>
        </div>
    )
}

export default Mobile;