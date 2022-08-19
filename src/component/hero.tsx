import { Form, FormGroup, Label, Input, Button } from "./shared/forms";

import python from "./../assets/python.png";
import duration from "./../assets/duration.svg";
import hours from "./../assets/hours.svg";
import price from "./../assets/price.svg";
import ButtonComponent from "./shared/button";
import downloadIcon from "./../assets/download.svg";

import "./../sass/component/_hero.scss";

export default function Hero() {
  return (
    <div className="heroComponent">
      <div className="contentHero">
        <div>
          <div className="dflex fd-row">
            <img src={python} className="imgPy" alt="python" />
            <div className="dflex fd-col">
              <h5>Curso de </h5>
              <span className="cover-text">Python</span>
            </div>
          </div>
          <p>
            <b>En Groway</b> diseñamos y dictamos este curso de Python para
            introducir a aquellas personas que no han tenido contacto con el
            lenguaje de programación. <b>Python</b> es un lenguaje que posee
            muchas aplicaciones y hoy en día se puede utilizar para realizar
            sitios web escalables, realizar cálculos estructurales complejos,
            videojuegos, entre muchísimas cosas más.
          </p>
        </div>

        <article className="presitions">
          <figure className="item">
            <img src={duration} alt="duration" />
            <figcaption>
              <h2>Duración</h2>
              <span>3 semanas</span>
            </figcaption>
          </figure>

          <figure className="item">
            <img src={hours} alt="hours" />
            <figcaption>
              <h2>Horario</h2>
              <span>15:00 a 17:00</span>
            </figcaption>
          </figure>

          <figure className="item">
            <img src={price} alt="price" />
            <figcaption>
              <h2>Costo</h2>
              <span>150 usd</span>
            </figcaption>
          </figure>
        </article>
      </div>

      <aside className="formInfo-hero">
        <h2>Inscríbete</h2>
        <p>Sólo necesitas completar tus datos:</p>
        <Form>
          <FormGroup>
            <Label htmlFor="label">Nombre</Label>
            <Input id="label" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastname">Apellido</Label>
            <Input type="text" id="lastname" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input type="email" id="email" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="prefijo">+54</Label>
            <Label htmlFor="prefijo">Teléfono</Label>
            <Input type="tel" id="prefijo" />
          </FormGroup>
          <FormGroup>
            <Label>&nbsp;</Label>
            <Input type="tel" />
          </FormGroup>
          <Button>Último paso</Button>
        </Form>
      </aside>
      <div className="btnDownload">
        <ButtonComponent label="Descargar Brochure" icon={downloadIcon} />
      </div>
    </div>
  );
}
