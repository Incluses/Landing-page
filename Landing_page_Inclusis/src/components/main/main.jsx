import NavScrollExample from "../navbar/NavBar.jsx";
import Introducao from "../introducao/Introducao.jsx"
import Beneficios from "../beneficios/Beneficios.jsx";
import Conteudo from "../conteudo/Conteudo.jsx";
import style from "./Main.module.css"

function Main(){
    return(
        <div>
            <NavScrollExample />
            <Introducao />
            <Beneficios />
            <Conteudo />
        </div>
    )
}

export default Main