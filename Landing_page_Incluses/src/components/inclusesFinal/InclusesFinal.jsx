import style from "./InclusesFinal.module.css";

function InclusesFinal() {
  const voltarInicio = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <div id={style.divMae}>
        <img
          src="src\assets\Group 276 (1).png"
          alt="Imagem do app Incluses"
          id={style.app}
        />
        <div id={style.texto}>
          <img
            src="src/assets/Group 184.png"
            alt="Logo do app Incluses"
            id={style.logo}
          />
          <div id={style.appsPrincipais}>
            <div id={style.playstore}>
              <img src="src\assets\Vector.png" alt="logo"  className={style.logoApps}/>
              <p className={style.tituloApp}>Disponível na Playstore</p>
              <p className={style.emBrevePlay}>Em breve</p>
            </div>
            <div id={style.applestore}>
              <img src="src\assets\Group.png" alt="logo" className={style.logoApps} />
              <p className={style.tituloApp}>Disponível na Apple Store</p>
              <p className={style.emBreveApple}>Em breve</p>
            </div>
          </div>
          
          <img src="src\assets\caraUsandoCelular 1 (1).png" alt="" id={style.caraUsandoCelular}/>
        </div>
      </div>
      <div id={style.barraStatus}>
        <img
          src="src/assets/Group 248.png"
          alt="incluses"
          id={style.incluses}
        />
        <div className={style.redeSocial}>
          <img
            src="src/assets/Group 171.png"
            alt="instagram"
            className={style.icone}
          />
          <p id={style.textoInstagram}>@diversis_oficial</p>
          <img
            src="src/assets/Group 170.png"
            alt="instagram"
            className={style.icone}
          />
          <p id={style.textoEmail}>diversis.oficial@gmail.com</p>
        </div>
        <button id={style.botao} onClick={voltarInicio}>
          ^ início
        </button>
      </div>
    </>
  );
}

export default InclusesFinal;
