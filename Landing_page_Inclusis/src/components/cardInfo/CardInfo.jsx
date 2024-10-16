import style from "./CardInfo.module.css"

function CardInfo({title,text}){
    return(
        <div className={style.card}>
            <h1 className={style.title}>{title}</h1>
            <p className={style.text}>{text}</p>
        </div>
    )
}

export default CardInfo