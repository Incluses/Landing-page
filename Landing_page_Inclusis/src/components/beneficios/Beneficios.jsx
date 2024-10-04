import style from './Beneficios.module.css';

function Beneficios(){
    return (
        <>
            <div id={style.divBeneficios}>
                <p id={style.beneficios}>Benefícios</p>
            </div>

            <p id={style.oportuEmpre}>Além das oportunidades de emprego,</p>
            <p id={style.fazerCursos}>por que fazer cursos na Incluses?</p>
            <div id={style.topicos}>
                <img src="src/assets/Group 175.png" alt="uma pessoa" id={style.imgPessoa}/>
                <p className={style.pMae}><p className={style.nums}>1</p>     Conteúdos direcionados</p>
                <p className={style.conteudo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                <p className={style.conteudo}>do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <hr />

                <p className={style.pMae}><p className={style.nums}>2</p>     Grande relevância curricular</p>
                <p className={style.conteudo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                <p className={style.conteudo}>do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <hr />

                <p className={style.pMae}><p className={style.nums}>3</p>     Mais conforto e transparência</p>
                <p className={style.conteudo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </p>
                <p className={style.conteudo}>do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <hr />
            </div>
            <div id={style.border}>
            </div>
        </>
    )
}

export default Beneficios;