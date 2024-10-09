import style from "./loginAcessoRestrito.module.css"
import imagemFundo from "../../assets/fundoLoginAcessoRestrito.png"
import InputTexto from "../input-texto/InputTexto"
import Link from "../links/Link"
import BotaoPrincipal from "../botaoPrincipal/BotaoPrincipal"
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';


function loginAcessoRestrito(){

    const navigate = useNavigate();

    const goToGrafic = () => {
        navigate('/grafic')
    }
    
    

    return(
    <div className={style.geral}>
        <div className={style.card}>
            <div className={style.textos}>
                <h1 id={style.titulo}>Incluses</h1>
                <h2 id={style.subtitulo}>Acesso Restrito</h2>
            </div>
            <div id={style.inputs}>
                <InputTexto onChange={(e) => setEmail(e.target.value)} placeholder="Ex: Exemple@gmail.com" text="Digite seu login:" type="text" id="inputEmail"></InputTexto>
                <InputTexto onChange={(e) => setSenha(e.target.value)} placeholder="Ex: *********" text="Digite sua senha:" type="password"></InputTexto>
            </div>
            <Link text="Esqueci minha senha" className={style.senha}></Link>
            <div className={style.botao}>
                <BotaoPrincipal onClick={()=> {goToGrafic()}} text="Entrar" backgroundColor="blue" marginTop="13%" marginBotton="30%"></BotaoPrincipal>
            </div>
        </div>
        <div className={style.termos}>
                <p id={style.texto1}>Ao continuar, você concorda com a</p>
                <p id={style.texto2}>politica de privacidade e Termo de uso.</p>
            </div>

    </div>)
}

export default loginAcessoRestrito;