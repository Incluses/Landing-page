import style from "./Link.module.css";

function Link({ text, link }) {
  return (
    <div className={style.link}>
      <a href={link}>
        <p>{text}</p>
      </a>
    </div>
  );
}

export default Link;
