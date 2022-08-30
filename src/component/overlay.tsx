import wait from "../assets/wait.png";
import "../sass/component/_overlay.scss";

export default function Overlay() {
  return (
    <div className="overlay">
      <div className="overlay__content">
        <div className="overlay__content__title">
          <h1>Pronto estará disponible la venta pública, ten paciencia...</h1>
          <span>Por ahora sólo se comprar usando un enlace de invitación.</span>
        </div>
        <img
          src={wait}
          alt="Espera"
          className="overlay__content__image"
          draggable={false}
        />
      </div>
    </div>
  );
}
