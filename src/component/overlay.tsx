import { Link } from "react-router-dom";

import coming_soon from "../assets/coming-soon/coming-soon.png";
import "../sass/component/_overlay.scss";

export default function Overlay() {
  return (
    <div className="overlay">
      <nav className="navbar">
        <Link to="/">
          <img
            src="assets/img/groway-gray.svg"
            alt="Groway.Studio"
            draggable="false"
          />
        </Link>
      </nav>
      <div className="overlay__content">
        <img
          src={coming_soon}
          alt="Espera"
          className="overlay__content__image"
          draggable={false}
        />
        <div className="overlay__content__title">
          <p>Pronto estará disponible la venta pública</p>
          <span>
            Por ahora sólo se puede comprar usando un enlace de invitación.
          </span>
        </div>
      </div>
    </div>
  );
}
