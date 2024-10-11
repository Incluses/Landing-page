import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import style from "./FormLogin.module.css";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    // Aqui você implementaria a lógica de envio dos dados para o servidor
    console.log(data);
    setSubmitted(true);
  };

  const regexNome =
    /^adm((?=.[A-Z]{1,})?|(?=.[a-z]{1,}))(?=.\d{1,})?(?=.[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\[\]\{\}\|\;\:\'\"\,\.\<\>\/\?])?.{3,}/;
  const regexSenha =
    /^(?=.[A-Z])(?=.[a-z])(?=.[áàâãéèêíïóôõöú])?(?=.[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\[\]\{\}\|\;\:\'\"\,\.\<\>\/\?]).{8,}$/;

  return (
    <div>
      <h1 id={style.titulo}>
        Inclu<span id={style.tituloDiferente}>ses</span>
      </h1>
      <hr id={style.linha} />
      <p id={style.textoLogin}>Acesso Restrito</p>
      <Form id={style.form} onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label id={style.textoMae}>Administrador: </Form.Label>
          <Form.Control
            id={style.textoFilho}
            type="text"
            placeholder="Ex: adm123"
            {...register("nome", {
              required: "Campo obrigatório",
              pattern: {
                value: regexNome,
                message: "Nome de usuário inválido",
              },
            })}
          />
          {errors.nome && <span>{errors.nome.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label id={style.textoMae}>Digite a senha: </Form.Label>
          <Form.Control
            id={style.textoFilho}
            type="password"
            placeholder="Senha"
            {...register("senha", {
              required: "Campo obrigatório",
              pattern: {
                value: regexSenha,
                message: "Senha inválida",
              },
            })}
          />
          {errors.senha && <span>{errors.senha.message}</span>}
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          id={style.botao}
          disabled={submitted}
        >
          Entrar
        </Button>
      </Form>
    </div>
  );
};

export default FormLogin;
