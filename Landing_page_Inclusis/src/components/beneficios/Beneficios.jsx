import style from './Beneficios.module.css';

function Beneficios(){
    return (
        <>
            <div id={style.divBeneficios}>
                <p id={style.beneficios}>Benefícios</p>
            </div>

            <p id={style.oportuEmpre}>Além das oportunidades de emprego,</p>
            <p id={style.fazerCursos}>por que fazer cursos na Incluses?</p>

            <div className={style.conteudoDirecionado}>
                <p id={style.num1}><span>1</span>   Conteúdos direcionados</p>
            </div>
            
            <p id={style.conteudoDemandas}>Os cursos são planejados para atender às demandas do mercado,</p>
            <p id={style.areaEspecifica}>focando em habilidades práticas e específicas de cada área.</p>


            <div className={style.conteudoDirecionado}>
                <p id={style.num2}><span>2</span>   Grande relevância curricular</p>
            </div>

            <div className={style.conteudoDirecionado}>
                <p id={style.num3}><span>3</span>   Mais conforto e transparência</p>
            </div>
        </>
    )
}

export default Beneficios;