import style from './SobreNos.module.css';

function SobreNos() {
    return (
        <div id={style.divMae}>
            <div id={style.nossaEquipe}>
                <p id={style.nossaEquipeFilho}>Conheça nossa equipe</p>
            </div>
            <div id={style.divFilha}>
                <div id={style.grupo}>
                    <img src="src/assets/Group 193.png" alt="Logo Diversis" id={style.logo}/>
                    <img src="src/assets/Group 212.png" alt="Nós" id={style.nos}/>
                </div>
                <div id={style.texto}>
                    <h1 id={style.sobreNos}>Sobre Nós</h1>
                    <p id={style.textoDois}>A ideia de criar a empresa surgiu da observação e 
                         compreesão profunda das dificuldades enfrentadas
                         pela comunidade LGBTQIAPN+.
                         Nossa missão é fazer a diferença, oferecendo
                         serviços práticos e acessíveis que 
                         ajudem a melhorar a qualidade de
                         vida e o bem-estar de todos os membros da
                         comunidade.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SobreNos;