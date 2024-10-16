import style from "./Infos.module.css"
import Navbar from "../navbar2/Navbar"
import CardInfo from "../cardInfo/CardInfo"
import React, { useRef } from "react";

function Infos(){



    return(
        <div>
            <Navbar color2="#2B46D3"></Navbar>
            <div className={style.cards}>
                <CardInfo title="Information" text="fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada"></CardInfo>
                <CardInfo title="2Information" text="fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada"></CardInfo>
                <CardInfo title="3Information" text="fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada"></CardInfo>
                <CardInfo title="4Information" text="fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada"></CardInfo>
                <CardInfo title="Information5" text="fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada"></CardInfo>
                <CardInfo title="Information6" text="fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada fala galera aqui do canal eu sou o renato e eu gosto demais de falar com a rapaziada"></CardInfo>
            </div>
        </div>
    )
}

export default Infos