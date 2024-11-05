import style from "./NossaEquipe.module.css";

function NossaEquipe() {
  return (
    <div id={style.divMae}>
      <img src="src/assets/Group 235.png" alt="" id={style.imgBloco} />
      <div id={style.textoPrincipal}>
        <p id={style.titulo}>Nossas crenças</p>
        <p className={style.texto}>
          Diversis é uma empresa comprometida em transformar vidas. <br />
          Nosso foco está em promover a inclusão e criar oportunidades <br />
          reais para pessoas.
        </p>
        <p className={style.texto}>
          Acreditamos no poder da diversidade como um motor para a <br />
          inovação e o crescimento, e estamos determinados a fortalecer <br />
          essa diversidade em todos os ambientes em que atuamos.
        </p>
      </div>
      <div id={style.nossaEquipeFilha}>
        <p id={style.nossaEquipeTexto}>Nossa equipe</p>
      </div>
      <div id={style.fotosPrincipais}>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 249.png" alt="bruna" />
          <p className={style.nomes}>Bruna Cardoso</p>
          <p className={style.funcoes}>Desenvolvedora front-end</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 250.png" alt="diogo" />
          <p className={style.nomes}>Diogo Barbosa</p>
          <p className={style.funcoes}>Desenvolvedor full stack</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 251.png" alt="eduardo" />
          <p className={style.nomes}>Eduardo Toledo</p>
          <p className={style.funcoes}>Desenvolvedor front-end</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 252.png" alt="enrico" />
          <p className={style.nomes}>Enrico Piero</p>
          <p className={style.funcoes}>Desenvolvedor back-end</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 253.png" alt="gustavo" />
          <p className={style.nomes}>Gustavo Henrique</p>
          <p className={style.funcoes}>Desenvolvedor full stack</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 254.png" alt="jeff" />
          <p className={style.nomes}>Jefferson Custódio</p>
          <p className={style.funcoes}>Desenvolvedor back-end</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 255.png" alt="joao" />
          <p className={style.nomes}>João de Abreu</p>
          <p className={style.funcoes}>Desenvolvedor back-end</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 256.png" alt="joyce" />
          <p className={style.nomes}>Joyce Nicole</p>
          <p className={style.funcoes}>Desenvolvedora back-end</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 257.png" alt="luca" />
          <p className={style.nomes}>Luca Almeida</p>
          <p className={style.funcoes}>Analista de dados</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 258.png" alt="olivia" />
          <p className={style.nomes}>Olívia Farias</p>
          <p className={style.funcoes}>Analista de dados</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 259.png" alt="rafael" />
          <p className={style.nomes}>Rafael Akira</p>
          <p className={style.funcoes}>Desenvolvedor front-end</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 260.png" alt="renato" />
          <p className={style.nomes}>Renato Barros</p>
          <p className={style.funcoes}>Desenvolvedor full stack</p>
        </div>
      </div>
    </div>
  );
}

export default NossaEquipe;
