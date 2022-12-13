import "./../sass/component/_modality.scss";
import icWifi from "./../assets/ic-wifi.svg";
import icPlay from "./../assets/ic-play.svg";
import icTutor from "./../assets/ic-tutor.svg";
import icMaterial from "./../assets/ic-material.svg";

export default function Modality() {
  return (
    <section className="modalityComponent">
      <aside>
        <h1>Modalidad</h1>
      </aside>
      <aside>
        <article className="item">
          <img src={icWifi} alt="wifi" draggable={false} />
          <span>
            Semi Presencial
          </span>
        </article>
        <article className="item">
          <img src={icMaterial} alt="material" draggable={false} />
          <span>
            Material <br />
            descargable
          </span>
        </article>
        <article className="item">
          <img src={icPlay} alt="play" draggable={false} />
          <span>
            Sesiones Teoricas Grabadas
          </span>
        </article>
        <article className="item">
          <img src={icTutor} alt="tutos" draggable={false} />
          <span>
            Sesiones Practicas en Vivo
          </span>
        </article>
      </aside>
    </section>
  );
}
