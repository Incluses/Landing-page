import style from "./loginAcessoRestrito.module.css"
import imagemFundo from "../../assets/fundoLoginAcessoRestrito.png"
import InputTexto from "../input-texto/InputTexto"
import Link from "../links/Link"
import BotaoPrincipal from "../botaoPrincipal/BotaoPrincipal"
import { useNavigate } from 'react-router-dom';


function loginAcessoRestrito(){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    Login(() => {
            // Fazendo a requisição HTTP usando fetch
            fetch('http://localhost:8080/dados')
            .then((response) => {
                if (!response.ok) {
                throw new Error('Erro na requisição');
                }
                return response.json(); // Converte a resposta para JSON
            })
            .then((data) => {
                setData(data); // Armazena os dados na variável de estado
                setLoading(false); // Finaliza o carregamento
            })
            .catch((error) => {
                setError(error); // Lida com erros
                setLoading(false);
            });
        }, []); // O array vazio significa que a consulta será feita apenas uma vez ao montar o componente

        if (loading) {
            return <p>Carregando...</p>;
        }

        if (error) {
            return <p>Erro: {error.message}</p>;
        }

            const emailValido = () => {
                const regex = /^[a-zA-Z]+@[a-zA-Z]+$/;
                window.alert("passou")
                // if (!regex.test(emailInput)) {
                //     window.alert("ok")
                // } else {
                //     window.alert("não foi")
                // }
        };

    const navigate = useNavigate();

    const goToGrafic = () => {
        navigate('/grafic')
    }

    

    return(
    <div className={style.geral}>
        <img src={imagemFundo} className={style.img_fundo}></img>
        <div className={style.card}>
            <div className={style.textos}>
                <h1 id={style.titulo}>Incluses</h1>
                <h2 id={style.subtitulo}>Acesso Restrito</h2>
            </div>
            <div id={style.inputs}>
                <InputTexto onChange={(e) => setEmail(e.target.value)} placeholder="Ex: Exemple@gmail.com" text="Digite seu login:" type="text" id="inputEmail"></InputTexto>
                <InputTexto placeholder="Ex: *********" text="Digite sua senha:" type="password"></InputTexto>
            </div>
            <Link text="Esqueci minha senha" className={style.senha}></Link>
            <div className={style.botao}>
                <BotaoPrincipal onClick={() => {goToGrafic()}} text="Entrar" backgroundColor="blue" marginTop="13%" marginBotton="30%"></BotaoPrincipal>
            </div>
        </div>
        <div className={style.termos}>
                <p id={style.texto1}>Ao continuar, você concorda com a</p>
                <p id={style.texto2}>politica de privacidade e Termo de uso.</p>
            </div>

    </div>)
}

export default loginAcessoRestrito;