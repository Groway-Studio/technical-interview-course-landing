import * as React from "react";
import LogoGrowayWhite from "./../../assets/logo-white.png";
import LogoFajesa from "./../../assets/fajesa-w.png";

import "./../../sass/shared/_footer.scss";
import fbIlus from "./../../assets/ic-socials-2.svg";
import linkedinIlus from "./../../assets/ic-socials-1.svg";
import igIlus from "./../../assets/ic-socials.svg";

export default function Footer() {
  return (
    <React.Fragment>
      <div className="footerComponent">
        <section className="container">
          <aside className="logoSection">
            <img className="brandOne" src={LogoFajesa} alt="" />
            <strong>powered by</strong>
            <img className="brandTwo" src={LogoGrowayWhite} alt="" />
          </aside>
          <aside className="ctaSection">
            <span><a href="#">Curso de Python</a></span>
            <span><a href="#">Sistema de Cursado</a></span>
            <span><a href="#">Más información</a></span>
            <span><a href="#">Brochure</a></span>
          </aside>
          <aside className="sectionRight">
            <aside className="ubication">
              <article> <strong>EE.UU</strong><br /> +1 786 7558193</article>
              <article> <strong>Argentina</strong><br /> +54 11 52175854</article>
              <article> <strong>Colombia</strong><br /> +57 15800311</article>
            </aside>
            <article className="socials">
              <img src={fbIlus} alt="" />
              <img src={linkedinIlus} alt="" />
              <img src={igIlus} alt="" />
            </article>
          </aside>
        </section>
      </div>
    </React.Fragment>
  );
}
