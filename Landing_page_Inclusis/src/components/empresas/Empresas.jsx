import style from './Empresas.module.css';

function Empresas() {
    return (
        <div id={style.containerEmpresas}>
            <div id={style.divEmpresasCausas}>
                <p id={style.empresasCausas}>Conheça as empresas das causas</p>
                <p id={style.inclusesTexto}>Incluses é o app que só aceita <br /> 
                empresas que visam a inclusão e <br />
                a diversidade, assim como a </p>
                <img src="src\assets\Group 193.png" alt="Logo da Diversis" />
                <p id={style.empresasTexto}>Ver empresas</p>
            </div>
        </div>
        
    );
}


export default Empresas;
