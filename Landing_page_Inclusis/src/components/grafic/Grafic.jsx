import style from "./Grafic.module.css"
import Navbar from "../navbar2/Navbar"
import BotaoNav from "../botaoNav/BotaoNav"
import pesquisar from "../../assets/pesquisar.png"

function Grafic(){
    return(
        <div className={style.geral}>
            <Navbar color1="#2B46D3"></Navbar>
        </div>
    )
}

export default Grafic
