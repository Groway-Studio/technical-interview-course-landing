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
          <img src={icWifi} alt="wifi" />
          <span>
            100% <br /> Online y Síncrono
          </span>
        </article>
        <article className="item">
          <img src={icTutor} alt="tutos" />
          <span>
            Acompañamiento <br />
            de tutores
          </span>
        </article>
        <article className="item">
          <img src={icPlay} alt="play" />
          <span>
            Clases <br />
            grabadas
          </span>
        </article>
        <article className="item">
          <img src={icMaterial} alt="material" />
          <span>
            Material <br />
            descargable
          </span>
        </article>
      </aside>
    </section>
  );
}
