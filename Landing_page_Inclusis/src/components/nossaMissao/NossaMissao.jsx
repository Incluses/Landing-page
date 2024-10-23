import style from './NossaMissao.module.css';

function SobreNos() {
    return (
        <div id={style.divMae}>
            <div id={style.quemSomos}>
                <p id={style.quemSomosFilho}>Quem somos</p>
            </div>
            <div id={style.divFilha}>
                <div id={style.texto}>
                    <h1 id={style.nossaMissao}>Nossa missão</h1>
                    <p id={style.textoDois}> Diversis é uma empresa comprometida em transformar vidas. 
                    Nosso foco está em promover a inclusão e criar oportunidades 
                    reais para pessoas.
                    </p>
                    <hr />
                    <h1 id={style.nossaMissao}>Nossa crença</h1>
                    <p id={style.textoDois}>  Acreditamos no poder da diversidade como um motor para a 
                    inovação e o crescimento, e estamos determinados a fortalecer
                    essa diversidade em todos os ambientes em que atuamos. 
                    </p>
                </div>
                <div id={style.grupo}>
                    <img src="src/assets/Group 220.png" alt="Nós" id={style.nos}/>
                </div>
            </div>
        </div>
    )
}

export default SobreNos;