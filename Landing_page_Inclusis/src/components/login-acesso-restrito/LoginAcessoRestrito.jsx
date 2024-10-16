import style from "./loginAcessoRestrito.module.css"
import imagemFundo from "../../assets/fundoLoginAcessoRestrito.png"
import InputTexto from "../input-texto/InputTexto"
import Link from "../links/Link"
import BotaoPrincipal from "../botaoPrincipal/BotaoPrincipal"
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function loginAcessoRestrito(){

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulário enviado. Valor do input:", inputValue);
  };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');  

    const navigate = useNavigate();

    const goToGrafic = () => {
        navigate('/grafic')
    }

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const userInfo = localStorage.getItem('userInfo');
    
        if (!isLoggedIn) {
          localStorage.setItem('isLoggedIn', false);
        }
    
        if (!userInfo) {
          const user = {
            username: 'renato',
            password: '1234',
            loginTime: new Date().toISOString()
          };
          localStorage.setItem('userInfo', JSON.stringify(user));
        }
    
        console.log('User Info:', localStorage.getItem('userInfo'));
      }, []);

      const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem('userInfo'));
    
        if (storedUser.username === username && storedUser.password === password) {
          goToGrafic()
        } else {
          alert('Login mal sucedido!')
        }
      };
    
    

    return(
    <div className={style.geral}>
        <div className={style.card}>
            <div className={style.textos}>
                <h1 id={style.titulo}>Incluses</h1>
                <h2 id={style.subtitulo}>Acesso Restrito</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div id={style.inputs}>
                    <InputTexto value={username} onChange={(e) => setUsername(e.target.value)}  placeholder="Ex: Exemple@gmail.com" text="Digite seu login:" type="text" id="inputEmail"></InputTexto>
                    <InputTexto value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Ex: *********" text="Digite sua senha:" type="password"></InputTexto>
                </div>
                <Link text="Esqueci minha senha" className={style.senha}></Link>
                <div className={style.botao}>
                    <BotaoPrincipal type="submit" onClick={handleLogin} text="Entrar" backgroundColor="blue" marginTop="13%" marginBotton="30%"></BotaoPrincipal>
                </div>
            </form>
        </div>
        <div className={style.termos}>
                <p id={style.texto1}>Ao continuar, você concorda com a</p>
                <p id={style.texto2}>politica de privacidade e Termo de uso.</p>
            </div>

    </div>)
}

export default loginAcessoRestrito;