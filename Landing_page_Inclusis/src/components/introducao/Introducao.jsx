import style from "./Introducao.module.css";
import Button from 'react-bootstrap/Button';


function Introducao() {
    return (
        <div>
            <img src="src/assets/Group 167.png" alt="imagem de pessoas" id={style.imgPessoas}/>
            <Button variant="primary" id={style.botao}>Sobre nós</Button>{' '}
            <p id={style.maisOportu}>+ mais oportunidades oferecidas pra você</p>
            <p id={style.tituloIntrodu}><span>Inclus<span>es</span></span>, a oportunidade</p>
            <p id={style.tituloIntrodu2}>que <span>você</span> precisa para aprender,</p>
            <p id={style.tituloIntrodu3}>empreender, trabalhar e</p>
            <p id={style.tituloIntrodu4}>crescer</p>
            <img src="src/assets/Group 168.png" alt="imagem de introdução" id={style.imagem}/>
            </div>
    )
}

export default Introducao;