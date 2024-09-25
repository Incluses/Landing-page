import style from "./Main.module.css"
import imagemFundo from "../../assets/fundoLoginAcessoRestrito.png"

function Main(){
    return(
        <div className={style.main}>
            <img src={imagemFundo} alt="imagem de fundo" />
        </div>
    )
}

export default Main