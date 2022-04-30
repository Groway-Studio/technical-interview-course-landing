import * as React from "react";
import "./../sass/component/_modality.scss";
import icWifi from "./../assets/ic-wifi.svg";
import icPlay from "./../assets/ic-play.svg";
import icTutor from "./../assets/ic-tutor.svg";
import icMaterial from "./../assets/ic-material.svg";

export default function Modality() {
  return (
    <React.Fragment>
      <section className="modalityComponent">
        <aside>
          <hr />
          <h1>Modalidad</h1>
        </aside>
        <aside>
          <article className="item">
            <img src={icWifi} alt="" />
            <span>100% <br /> Online</span>
          </article>
          <article className="item">
            <img src={icTutor} alt="" />
            <span>Acompañamiento <br />de tutores</span>
          </article>
          <article className="item">
            <img src={icPlay} alt="" />
            <span>Clases <br />grabadas</span>
          </article>
          <article className="item">
            <img src={icMaterial} alt="" />
            <span>Material <br />descargable</span>
          </article>
        
          
        </aside>
      </section>
          
    </React.Fragment>
  );
}
