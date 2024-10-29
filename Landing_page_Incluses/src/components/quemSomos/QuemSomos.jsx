import style from "./QuemSomos.module.css";

function QuemSomos() {
  return (
    <>
      <div id={style.pessoas}>
        <img
          src="src\assets\Group 245.png"
          alt="Imagem de pessoas"
          id={style.img}
        />
        <p className={style.texto2}>
          Nosso compromisso é fazer a diferença, oferecendo serviços <br />
          práticos e acessíveis que ajudem a melhorar a qualidade de <br />
          vida e o bem-estar de todos os membros da comunidade.
        </p>
      </div>

      <div id={style.nossaEmpresa}>
        <div id={style.nossaEmpresaFilha}>
          <p id={style.nossaEmpresaTexto}>Nossa empresa</p>
        </div>
        <p className={style.texto}>
          A ideia de criar a nossa empresa surgiu da
        </p>
        <p className={style.texto}>observação e compreensão profunda das</p>
        <p className={style.texto}>dificuldades enfrentadas pela comunidade</p>
        <p className={style.texto}>LGBTQIAPN+.</p>
        <img
          src="src\assets\Group 246.png"
          alt="Imagem de pessoa"
          id={style.imgPessoa}
        />
      </div>
    </>
  );
}

export default QuemSomos;
