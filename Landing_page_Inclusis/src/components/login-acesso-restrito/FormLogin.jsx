import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import style from './FormLogin.module.css'

function FormLogin() {
  return (
    <div>
      <h1 id={style.titulo}>Inclu<span id={style.tituloDiferente}>ses</span></h1>
      <hr id={style.linha} />
      <p id={style.textoLogin}>Acesso Restrito</p>
      <Form id={style.form}>
        <Form.Label id={style.textoMae}>Administrador: </Form.Label>
        <Form.Control id={style.textoFilho} type="text" placeholder="Ex: adm123" />
        <Form.Group className="mb-3" controlId="formBasicEmail">
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label id={style.textoMae}>Digite a senha: </Form.Label>
        <Form.Control id={style.textoFilho} type="password" placeholder="Senha" />
        </Form.Group>
        <Button variant="primary" type="submit" id={style.botao}>Entrar</Button>
      </Form>
    </div>
  );
}

export default FormLogin;