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
                            <p>teste - usuario</p>
                        </div>
                    )}
                    {botaoSelecionado === 'empresa' && (
                        <div className={style.divMaeEmpresa}>
                            <p>teste - empresa</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Conteudo;

