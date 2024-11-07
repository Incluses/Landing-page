import style from "./Conteudo.module.css";
import Botao from "./Botao.jsx";
import BotaoDois from "./BotaoDois.jsx";
import { useState } from "react";

function Conteudo() {
  const [botaoSelecionado, setBotaoSelecionado] = useState("usuario");

  function aoClicarUsuario() {
    setBotaoSelecionado("usuario");
  }

  function aoClicarEmpresa() {
    setBotaoSelecionado("empresa");
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
          {botaoSelecionado === "usuario" && (
            <div className={style.divMaeUsuario}>
              <img
                src="src\assets\Group 190.png"
                alt="fundo_azul"
                id={style.imagemOrganizacaoDois}
              />
              <div id={style.conteudoDois}>
                <p className={style.pMaeUsuario}>
                  <p className={style.numsUsuario}>1</p>Oportunidades de emprego
                </p>
                <p className={style.conteudoFilhoDois}>
                  Encontre vagas inclusivas de empresas comprometidas com a
                  diversidade. <br />
                  Nossa plataforma facilita a conexão entre você e oportunidades
                  profissionais onde você pode ser quem realmente é.
                </p>

                <p id={style.pMaeDoisUsuario}>
                  <p className={style.numsUsuario}>2</p>Network
                </p>
                <p className={style.conteudoFilhoDois}>
                  Amplie sua rede de contatos em um ambiente acolhedor,
                  conectando-se a outros profissionais e empresas que valorizam
                  a inclusão e a diversidade.
                </p>

                <p className={style.pMaeUsuario}>
                  <p className={style.numsUsuario}>3</p>Mais conforto e
                  tranparência
                </p>
                <p className={style.conteudoFilhoDois}>
                  Sinta-se seguro para crescer em um espaço inclusivo, onde você
                  pode buscar oportunidades e compartilhar experiências com
                  confiança.
                </p>
              </div>
            </div>
          )}
          {botaoSelecionado === "empresa" && (
            <div className={style.divMaeEmpresa}>
              <img
                src="src\assets\Group 191.png"
                alt="fundo_roxo"
                id={style.imagemOrganizacao}
              />
              <div id={style.conteudo}>
                <p className={style.pMaeEmpresa}>
                  <p className={style.numsEmpresa}>1</p>Oportunidades de emprego
                </p>
                <p className={style.conteudoFilho}>
                  Atraia talentos incríveis e diversos para sua empresa, com
                  vagas que promovem a inclusão e a equidade no ambiente de
                  trabalho.
                </p>

                <p id={style.pMaeDoisEmpresa}>
                  <p className={style.numsEmpresa}>2</p>Network
                </p>
                <p className={style.conteudoFilho}>
                  Conecte-se com uma rede de empresas e profissionais que
                  acreditam em um mercado mais justo e inclusivo, expandindo
                  suas oportunidades de colaboração.
                </p>

                <p className={style.pMaeEmpresa}>
                  <p className={style.numsEmpresa}>3</p>Mais conforto e
                  tranparência
                </p>
                <p className={style.conteudoFilho}>
                  Ofereça um ambiente de trabalho transparente e acolhedor, onde
                  a diversidade é respeitada e valorizada, garantindo mais
                  satisfação e retenção de talentos.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Conteudo;
