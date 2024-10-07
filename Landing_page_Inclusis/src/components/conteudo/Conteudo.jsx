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
                <div className={style.containerDois}>
                    <div id={style.botoes}>
                        <Botao onClick={aoClicarUsuario} />
                        <BotaoDois onClick={aoClicarEmpresa} />
                    </div>
                    <p id={style.beneficios}>Benefícios</p>
                </div>
                <div>
                    {botaoSelecionado === 'usuario' && (
                        <div className={style.divMaeUsuario}>
                            <img src="src\assets\Group 190.png" alt="fundo_azul" id={style.imagemOrganizacao} />
                        </div>
                    )}
                    {botaoSelecionado === 'empresa' && (
                        <div className={style.divMaeEmpresa}>
                            <img src="src\assets\Group 191.png" alt="fundo_roxo" id={style.imagemOrganizacao} />
                            <div id={style.conteudo}>
                                <p className={style.pMae}><p className={style.nums}>1</p>Oportunidades de emprego</p>
                                <p className={style.conteudoFilho}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod temporqua.</p>

                                <p id={style.pMaeDois}><p className={style.nums}>2</p>Network</p>
                                <p className={style.conteudoFilho}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod temporqua.</p>

                                <p className={style.pMae}><p className={style.nums}>3</p>Mais conforto e tranparência</p>
                                <p className={style.conteudoFilho}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod temporqua.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Conteudo;

