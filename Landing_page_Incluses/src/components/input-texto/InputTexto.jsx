import style from "./InputTexto.module.css";

function InputTexto({ placeholder, text, type, onChange }) {
  return (
    <div className={style.geral}>
      <p id={style.texto}>{text}</p>
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={style.input}
      ></input>
    </div>
  );
}

export default InputTexto;
