import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import style from './FormLogin.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormLogin() {


  const navigate = useNavigate(); // Hook para navegação

  const handleClick = () => {
    navigate('/intermediaria'); // Define a rota para onde deseja navegar
  };
  const [admValido, setAdmValido] = useState(true);
  const [senhaValida, setSenhaValida] = useState(true);

  const patternAdm = /^adm((?=.[A-Z]{1,})?|(?=.[a-z]{1,}))(?=.\d{1,})?(?=.[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\[\]\{\}\|\;\:\'\"\,\.\<\>\/\?])?.{3,}/;
  const patternSenha = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z])(?=.*[áàâãéèêíïóôõöú])?(?=.*[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\[\]\{\}\|\;\:\'\"\,\.\<\>\/\?]).{8,}$/;

  const validarAdm = (loginAdm) => {
    setAdmValido(patternAdm.test(loginAdm));
  };

  const validarSenha = (loginSenha) => {
    setSenhaValida(patternSenha.test(loginSenha));
  };

  const submmit = (e) => {
    e.preventDefault();
    if (admValido && senhaValida) {
      console.log('Login válido!')
    } else {
      console.log('Login inválido!')
    }
  }



  return (
    <div>
      <h1 id={style.titulo}>Inclu<span id={style.tituloDiferente}>ses</span></h1>
      <hr id={style.linha} />
      <p id={style.textoLogin}>Acesso Restrito</p>
      <Form id={style.form} onSubmit={submmit}>
        <Form.Label id={style.textoMae}>Administrador: </Form.Label>
        <Form.Control id={style.textoFilho} type="text" placeholder="Ex: adm123"
          onChange={(e) => {
            setAdmValido(e.target.value);
            validarAdm(e.target.value);
          }}
          isInvalid={!admValido}
        />
        <Form.Group className="mb-3" controlId="formBasicEmail">
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label id={style.textoMae}>Digite a senha: </Form.Label>
        <Form.Control id={style.textoFilho} type="password" placeholder="Senha" 
          onChange={(e) => {
            setSenhaValida(e.target.value);
            validarSenha(e.target.value);
          }}
          isInvalid={!senhaValida}
        />
        </Form.Group>
        <Button onClick={() => {handleClick()}} variant="primary" type="submit" id={style.botao}>Entrar</Button>
      </Form>
    </div>
  );
}

export default FormLogin;