import style from "./Tela-intermediaria.module.css"
import Navbar from "../navbar2/Navbar"
import imgLogo from "../../assets/WhatsApp_Image_2024-09-03_at_8.26.11_PM-removebg-preview.png"
import CardArea from "../cardArea/CardArea"
import GraficIcon from "../../assets/graficos.png"
import BdIcon from "../../assets/bdIcon.png"
import { useNavigate } from 'react-router-dom';


function TelaIntermediaria(){

    const navigate = useNavigate(); // Hook para navegação

    const handleClick = () => {
        navigate('/grafic'); // Define a rota para onde deseja navegar
    };


    return(
    <div className={style.geral}>
        <div className={style.nav}>
            <img src={imgLogo} alt="logo" className={style.logo}></img>
            <h1 id={style.text}>Qual área quer seguir?</h1>
        </div>


        <div id={style.grupo}>
            <CardArea imgSrc={BdIcon} title="Admin" text="Analisar os dados em tempo real, registrados no banco relacional da Incluses." textBotton="Continuar"></CardArea>
            <CardArea onCLick={() => {handleClick()}} imgSrc={GraficIcon} title="Gráficos" text="Analisar os dados das pesquisas feitas, por meio de gráficos com interações, feitas no power BI" textBotton="Continuar"></CardArea>
        </div>
    </div>)
}

export default TelaIntermediaria