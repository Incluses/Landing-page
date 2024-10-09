import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import style from './FormLogin.module.css'

function FormLogin() {
  return (
    <div>
        <h1 id={style.titulo}>Inclu<span id={style.tituloDiferente}>ses</span></h1>
        <hr />
        <Form id={style.form}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Insira seu e-mail" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>
          <Button variant="primary" type="submit" id={style.botao}>
            Submit
          </Button>
        </Form>
    </div>
  );
}

export default FormLogin;