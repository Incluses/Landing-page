import style from './Conteudo.module.css';
import Botao from './Botao.jsx';
import BotaoDois from './BotaoDois.jsx';
import { useState } from 'react';

function Conteudo() {
    const [botaoSelecionado, setBotaoSelecionado] = useState('usuario');

    function aoClicarUsuario() {
        setBotaoSelecionado('usuario');
    }

    function aoClicarEmpresa() {
        setBotaoSelecionado('empresa');
    }

    return (
        <>
            <div id={style.container}>
                <div id={style.botoes}>
                    <Botao onClick={aoClicarUsuario} /> 
                    <BotaoDois onClick={aoClicarEmpresa} /> 
                    <div id={style.divBeneficios}>
                        <p id={style.beneficios}>Benefícios</p>
                    </div>
                </div>
                <div>
                    {botaoSelecionado === 'usuario' && (
                        <div className={style.divMaeUsuario}>
                            <img src="src\assets\eaf133c9-e76f-47d2-b293-8419d9ac55b0.png" alt="fundo_azul" id={style.imagemOrganizacao} />
                        </div>
                    )}
                    {botaoSelecionado === 'empresa' && (
                        <div className={style.divMaeEmpresa}>
                            <img src="src\assets\ff19c974-63fc-4ec6-9e79-0a3188d61a6f.png" alt="fundo_roxo" id={style.imagemOrganizacao} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Conteudo;

