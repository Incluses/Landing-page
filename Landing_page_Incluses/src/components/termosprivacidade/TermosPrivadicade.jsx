import style from "./termosPrivacidade.module.css"
import Navbar from "../navbar2/Navbar"

function TermosPrivacidade(){
    return(
        <div className={style.geral}>
            <h1 id={style.title}>Sobre a Política de Privacidade e Termos de Uso</h1>
            <p id={style.subtitle}><strong>O que é uma Política de Privacidade?</strong></p>
            <p id={style.text}>Uma política de privacidade é um documento que explica como um website lida com toda a informação coletada dos 
                seus utilizadores e/ou clientes. É uma boa prática dizer aos utilizadores como os sites armazenam e fazem uso desses dados.</p>
            <p id={style.subtitle}><strong>A Importância da Política de Privacidade</strong></p>
            <p id={style.text}>As políticas de privacidade podem ser exigidas por lei, dependendo de onde você opera. Em qualquer caso, é uma boa prática ter uma
                 política de privacidade de proteção de dados, especialmente se você colectar qualquer tipo de dados privados de seus usuários 
                 (por exemplo, dados de cookies, detalhes de pagamento, endereço e número de telefone). Além disso, você pode precisar de uma política
                 de privacidade para usar Google AdSense, APIs e serviços de terceiros como o Instagram ou listar seu aplicativo em um mercado comercial
                  como o Google Play. Se o seu site envolver usuários no Espaço Económico Europeu, você poderá ser obrigado a publicar uma política de 
                  privacidade em conformidade com o GDPR.</p>
                  <br></br>
            <p id={style.subtitle}><strong>O que são Termos de Uso (Termos e Condições)?</strong></p>
            <p id={style.text}>Tecnicamente, você não precisa de uma declaração de termos de serviço. Não é exigido por lei, mas geralmente é aconselhável incluir 
                esses termos no seu site para cobrir as expectativas e acordos entre você e seus usuários.</p>
            <p id={style.text}>Algumas empresas podem até solicitar que você disponibilize uma antes que possa entrar em um relacionamento com elas. Na maioria 
                das vezes, os proprietários e usuários do site se comportam de maneira justa e razoável, tornando suas informações de termos e 
                condições redundantes. No entanto, em circunstâncias incomuns, como aquelas que envolvem abuso, roubo de propriedade intelectual 
                ou comportamento ilegal, a indicação explícita dos termos e condições pode oferecer proteções básicas para você e sua empresa, 
                limitando sua responsabilidade e esclarecendo seus direitos sobre o conteúdo publicado sobre a Política de Privacidade e Termos 
                de Uso.</p>
        </div>
    )
}

export default TermosPrivacidade