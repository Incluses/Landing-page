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
          <p>Bruna Cardoso</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 250.png" alt="diogo" />
          <p>Diogo Barbosa</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 251.png" alt="eduardo" />
          <p>Eduardo Toledo</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 252.png" alt="enrico" />
          <p>Enrico Piero</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 253.png" alt="gustavo" />
          <p>Gustavo Henrique</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 254.png" alt="jeff" />
          <p>Jefferson Custódio</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 258.png" alt="joao" />
          <p>João de Abreu</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 259.png" alt="joyce" />
          <p>Joyce Nicole</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 260.png" alt="luca" />
          <p>Luca Almeida</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 261.png" alt="olivia" />
          <p>Olívia Farias</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 257.png" alt="rafael" />
          <p>Rafael Akira</p>
        </div>
        <div className={style.fotoContainer}>
          <img src="src/assets/Group 255.png" alt="renato" />
          <p>Renato Barros</p>
        </div>
      </div>
    </div>
  );
}

export default NossaEquipe;
