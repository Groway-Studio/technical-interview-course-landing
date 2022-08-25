import LogoGrowayWhite from "../../assets/groway-white.svg";
import fbIlus from "./../../assets/ic-socials-2.svg";
import linkedinIlus from "./../../assets/ic-socials-1.svg";
import igIlus from "./../../assets/ic-socials.svg";

import "./../../sass/shared/_footer.scss";

export default function Footer() {
  return (
    <div className="footerComponent">
      <section className="container">
        <aside className="logoSection">
          <img className="brandTwo" src={LogoGrowayWhite} alt="" />
        </aside>
        {/* <aside className="ctaSection">
          <span>
            <a href="/#">Curso de Python</a>
          </span>
          <span>
            <a href="/#">Sistema de Cursado</a>
          </span>
          <span>
            <a href="/#">Más información</a>
          </span>
          <span>
            <a href="/#">Brochure</a>
          </span>
        </aside> */}
        <aside className="sectionRight">
          <aside className="ubication">
            <article>
              <strong>Perú</strong>
              <p>
                AV. El Derby 055 Edificio Cronos, Torre 1 Piso 7 Santiago de
                Surco Lima - Perú
              </p>
            </article>
            <article>
              <strong>EE.UU</strong>
              <a href="tel:+1 786 7558193">
                <p>+1 786 7558193</p>
              </a>
            </article>
            <article>
              <strong>Argentina</strong>
              <a href="tel:+54 11 52175854">
                <p>+54 11 52175854</p>
              </a>
            </article>
            <article>
              <strong>Colombia</strong>
              <a href="tel:+57 15800311">
                <p>+57 15800311</p>
              </a>
            </article>
          </aside>
          <article className="socials">
            <a
              href="https://www.instagram.com/groway.studio"
              target="_blank"
              rel="noreferrer"
            >
              <img src={igIlus} alt="Groway.Studio" />
            </a>
            <a
              href="https://pe.linkedin.com/company/growaystudio"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIlus} alt="Groway.Studio" />
            </a>
            <a
              href="https://www.facebook.com/groway.studio"
              target="_blank"
              rel="noreferrer"
            >
              <img src={fbIlus} alt="Groway.Studio" />
            </a>
          </article>
        </aside>
      </section>
    </div>
  );
}
