import style from "./NossaEquipe.module.css";

function NossaEquipe() {
  return (
    <div id={style.divMae}>
        <img src="src\assets\Group 235.png" alt="" id={style.imgBloco} />
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
    </div>
  );
}

export default NossaEquipe;
