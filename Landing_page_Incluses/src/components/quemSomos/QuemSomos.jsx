import style from "./QuemSomos.module.css";

function QuemSomos() {
  return (
    <>
      <div id={style.pessoas}>
        <img
          src="src\assets\Group 245.png"
          alt="Imagem de pessoas"
          id={style.imgPessoas}
        />
        <div id={style.quemSomos}>
          <p id={style.quemSomosTexto}>Quem somos?</p>
        </div>
        <p id={style.textoDiversis}>
          <img src="src\assets\Logo.png" alt="logo" id={style.fundoAmarelo} />
          <p>
            acontece onde a <p className={style.fundoAzul}>tecnologia</p> e
            <br /> <p className={style.fundoAzul}>diversidade</p> se encontram."
          </p>
        </p>
        <p id={style.texto2}>
          Nosso compromisso é fazer a diferença, oferecendo serviços <br />
          práticos e acessíveis que ajudem a melhorar a qualidade de <br />
          vida e o bem-estar de todos os membros da comunidade.
        </p>
      </div>

      <div id={style.nossaEmpresa}>
        <div id={style.nossaEmpresaFilha}>
          <p id={style.nossaEmpresaTexto}>Nossa empresa</p>
        </div>
        <p id={style.textoEmpre}>
          A ideia de criar a nossa empresa surgiu da
          <br />
          observação e compreensão profunda das
          <br />
          dificuldades enfrentadas pela comunidade
          <br />
          LGBTQIAPN+.
        </p>
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
