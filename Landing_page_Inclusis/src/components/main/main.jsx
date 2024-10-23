import NavScrollExample from "../navbar/NavBar.jsx";
import Introducao from "../introducao/Introducao.jsx"
import Beneficios from "../beneficios/Beneficios.jsx";
import Conteudo from "../conteudo/Conteudo.jsx";
import Empresas from "../empresas/Empresas.jsx";
import NossaMissao from "../nossaMissao/NossaMissao.jsx";
import SobreNos from "../sobreNos/SobreNos.jsx";
import InclusesFinal from "../inclusesFinal/InclusesFinal.jsx";
import style from "./Main.module.css";

function Main(){
    return(
        <div>
            <NavScrollExample />
            <Introducao />
            <Beneficios />
            <Conteudo />
            <Empresas />
            <NossaMissao />
            <SobreNos />
            <InclusesFinal />
        </div>
    )
}

export default Main