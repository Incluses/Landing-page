import style from "./Introducao.module.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Introducao() {
  const navigate = useNavigate();

  const handleSobreNosClick = () => {
    navigate("/sobreNos");
  };

  return (
    <>
      <div id={style.imagem}>
        <div id={style.introdu}>
          <div id={style.maisOportu}>
            <img
              src="src\assets\Group 167.png"
              alt="imagem de pessoas"
              id={style.imgPessoas}
            />
            <p id={style.maisOportunidades}>
              + mais oportunidades oferecidas pra você
            </p>
          </div>
          <p></p>
          <p>
            <span>
              Inclus<span>es</span>
            </span>
            , a oportunidade <br />
            que <span>você</span> precisa para aprender, <br /> empreender,
            trabalhar e <br /> crescer
          </p>
          <Button
            variant="primary"
            onClick={handleSobreNosClick}
            id={style.botao}
          >
            Sobre nós
          </Button>{" "}
        </div>
      </div>

      <div id={style.divFacaCursos}>
        <p id={style.facaCursos}>
          Faça cursos e aprenda a gerenciar seu dinheiro para que o
          empoderamento não seja só moral
        </p>
      </div>
    </>
  );
}

export default Introducao;
