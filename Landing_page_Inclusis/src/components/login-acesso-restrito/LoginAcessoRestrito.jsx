import style from "./loginAcessoRestrito.module.css";
import imagemFundo from "../../assets/fundoLoginAcessoRestrito.png";
import InputTexto from "../input-texto/InputTexto";
import Link from "../links/Link";
import BotaoPrincipal from "../botaoPrincipal/BotaoPrincipal";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function loginAcessoRestrito() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const goToGrafic = () => {
    navigate("/grafic");
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          email,
          senha,
        }
      );
      console.log("Login bem-sucedido:", response.data);
      if (response.status === 200) {
        goToGrafic();
      }
    } catch (error) {
      console.error("Erro no login:", error.response?.data || error.message);
      if (error.response) {
        console.error("Erro no login:", error.response.data);
      } else if (error.request) {
        console.error("Erro de rede:", error.request);
      } else {
        console.error("Erro:", error.message);
      }
    }
  };

  const emailValido = () => {
    const regex = /^[a-zA-Z]+@[a-zA-Z]+$/;
    window.alert("passou");
    if (!regex.test(emailInput)) {
      window.alert("ok");
    } else {
      window.alert("não foi");
    }
  };

  // const navigate = useNavigate();

  return <div id={style.principal}>
      <button class="voltar">🢐 Voltar</button>
      <div class="container">
          <div class="incluses">
              <h1><span class="inclus">Inclus</span><span class="es">es</span></h1>
          </div>
          <hr/>
          <h2>Login administrador</h2>
          <form>
              <label for="usuario">Usuário:</label>
              <input type="text" id="usuario" placeholder="Ex: avnadmin"/>
              <label for="senha">Digite a senha:</label>
          <div class="senha-container">
              <input type="password" id="senha" placeholder="Ex: ****"/>
              <span class="mostrar-senha"><img src="Icone_olhoA.png" class="imagem-olho" alt="mostrar senha"/></span>
          </div>
              <button type="submit">Entrar</button>
          </form>
      </div>
      <script src="LandingPage.js"></script>
  </div>;
}

export default loginAcessoRestrito;
