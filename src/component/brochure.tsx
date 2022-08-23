import { ButtonComponent } from "./shared";

import programming from "./../assets/programming.png";
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
