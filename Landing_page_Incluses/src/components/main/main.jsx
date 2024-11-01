import NavScrollExample from "../navbar/NavBar.jsx";
import Introducao from "../introducao/Introducao.jsx"
import Beneficios from "../beneficios/Beneficios.jsx";
import Conteudo from "../conteudo/Conteudo.jsx";
import Empresas from "../empresas/Empresas.jsx";
import InclusesFinal from "../inclusesFinal/InclusesFinal.jsx";


function Main(){
    return(
        <div>
            <NavScrollExample />
            <Introducao />
            <Beneficios />
            <Conteudo />
            <Empresas />
            <InclusesFinal />
        </div>
    )
}

export default Main