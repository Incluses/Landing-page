import style from './BotaoPrincipal.module.css'

function BotaoPrincipal({backgroundColor,text,marginTop,marginBotton,onClick,type}){
    return(
        <button type={type} style={{backgroundColor:backgroundColor,marginTop:marginTop,marginBottom:marginBotton}} className={style.botao} onClick={onClick}>
            <p>{text}</p>
        </button>
    )
}

export default BotaoPrincipal