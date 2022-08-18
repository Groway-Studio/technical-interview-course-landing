import * as React from "react";

import programming from "./../assets/programming.png";
import ButtonComponent from "./shared/button";
import downloadIcon from "./../assets/download.svg";
import "./../sass/component/_brochure.scss";

export default function Brochure() {
  return (
    <section className="brochureComponent">
      <article className="contain">
        <img src={programming} className={"imageCover"} alt="" />
      </article>
      <article className="ctasection">
        <ButtonComponent label="Descargar Brochure" icon={downloadIcon} />
      </article>
    </section>
  );
}
