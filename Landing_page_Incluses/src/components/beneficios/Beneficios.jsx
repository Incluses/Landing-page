import style from "./Beneficios.module.css";

function Beneficios() {
  return (
    <>
      <div id={style.divMae}>
        <div id={style.titulos}>
          <div id={style.divBeneficios}>
            <p id={style.beneficios}>Benefícios</p>
          </div>
          <p id={style.oportuEmpre}>
            Além das oportunidades de emprego, <br />
            por que fazer cursos na Incluses?
          </p>
          <div id={style.topicos}>
            <p className={style.pMae}>
              <p className={style.nums}>1</p> Conteúdos direcionados
            </p>
            <p className={style.conteudo}>
              Cursos pensados para fortalecer o empreendedorismo e atender as necessidades específicas da comunidade LGBTQIAPN+ e empresas inclusivas.
            </p>
            <hr />
            <p className={style.pMae}>
              <p className={style.nums}>2</p> Grande relevância curricular
            </p>
            <p className={style.conteudo}>
              Oferecemos um espaço seguro e inclusivo, onde a comunidade LGBTQIAPN+ pode aprender com liberdade, confiança e apoio para seu desenvolvimento profissional e pessoal.
            </p>
            <hr />
            <p className={style.pMae}>
              <p className={style.nums}>3</p> Mais conforto e transparência
            </p>
            <p className={style.conteudo}>
              No Incluses, criamos um ambiente seguro e inclusivo, onde a comunidade LGBTQIAPN+ pode aprender e se desenvolver com confiança e total apoio.
            </p>
            <hr />
          </div>
        </div>
        <img
          src="src/assets/Group 175.png"
          alt="uma pessoa"
          id={style.imgPessoa}
        />
      </div>
      <div id={style.border}></div>
    </>
  );
}

export default Beneficios;
