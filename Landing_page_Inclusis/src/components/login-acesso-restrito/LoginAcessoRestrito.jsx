import style from "./loginAcessoRestrito.module.css";
import FormLogin from "./FormLogin";
import Voltar from "./Voltar";
import React, { useState } from "react";
import { useEffect } from 'react';
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
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const userInfo = localStorage.getItem('userInfo');
    
        if (!isLoggedIn) {
          localStorage.setItem('isLoggedIn', false);
        }
    
        if (!userInfo) {
          const user = {
            username: 'admRenatoBarros',
            password: 'Renato123@',
            loginTime: new Date().toISOString()
          };
          localStorage.setItem('userInfo', JSON.stringify(user));
        }
    
        console.log('User Info:', localStorage.getItem('userInfo'));
      }, []);


  return (
    <div id={style.principalMae}>
      <Voltar />
      <div id={style.principal}>
        <FormLogin />
      </div>
    </div>
  );
}

export default loginAcessoRestrito;