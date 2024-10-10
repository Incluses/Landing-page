import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import style from './FormLogin.module.css'

function FormLogin() {
  return (
    <div>
        <h1 id={style.titulo}>Inclu<span id={style.tituloDiferente}>ses</span></h1>
        <hr id={style.linha} />
        <p id={style.textoLogin}>Login administrador</p>
        <Form id={style.form}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id={style.textoMae}>Usuário: </Form.Label>
            <Form.Control id={style.textoFilho} type="email" placeholder="Ex: avadmin" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label id={style.textoMae}>Digite a senha: </Form.Label>
            <Form.Control id={style.textoFilho} type="password" placeholder="Ex: ********" />
          </Form.Group>
          <Button variant="primary" type="submit" id={style.botao}>
            Entrar
          </Button>
        </Form>
    </div>
  );
}

export default FormLogin;