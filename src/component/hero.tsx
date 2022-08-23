import { Form, FormGroup, Label, Input, Button } from "./shared/forms";

import python from "./../assets/python.png";
import duration from "./../assets/duration.svg";
import hours from "./../assets/hours.svg";
import price from "./../assets/price.svg";
import ButtonComponent from "./shared/button";
import downloadIcon from "./../assets/download.svg";

import useUserInfo from "../hooks/useUserInfo";
import "./../sass/component/_hero.scss";

export default function Hero() {
  const {
    firstName,
    lastName,
    email,
    prefixPhoneNumber,
    phoneNumber,
    handleInputChange,
    handleSubmit,
  } = useUserInfo();

  return (
    <div className="heroComponent">
      <div className="contentHero">
        <div>
          <div className="dflex fd-row">
            <img src={python} className="imgPy" alt="python" />
            <div className="dflex fd-col">
              <h5>Aprende </h5>
              <span className="cover-text">Python</span> como se debe.
            </div>
          </div>
          <p>
            <b>En Groway</b> diseñamos este curso de Python basado en la 
            experiencia acumulada de nuestros expertos para que puedas
            introducir y repasar los fundamentos de programacion a travez
            de <b>Python</b> de una forma sencilla, eficiente y divertida,
            recuerda que las bases son siempre importantes para crear 
            conocimiento solido y prepararte para trabajar en tu
            crecimiento profesional.

            <br />
            Aprende sobre estructuras de datos, principios solid, patrones de diseño, POO, Programacion Funcional, Algoritmos y mucho mas.
          </p>
        </div>

        <article className="presitions">
          <figure className="item">
            <img src={duration} alt="duration" />
            <figcaption>
              <h2>Duración</h2>
              <span>24 horas en 4 semanas</span>
            </figcaption>
          </figure>

          <figure className="item">
            <img src={hours} alt="hours" />
            <figcaption>
              <h2>Horario</h2>
              <span>Sab y Dom de 10:00 a 13:00</span>
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
        <h3>Inscríbete ahora y aprovecha el precio especial early bird</h3>
        {/* <p>Sólo necesitas completar tus datos:</p> */}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="firstName">Nombre</Label>
            <Input
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastName">Apellido</Label>
            <Input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="prefix1">+54</Label>
            <Label htmlFor="prefix1">Teléfono</Label>
            <Input
              type="tel"
              id="prefix1"
              name="prefixPhoneNumber"
              value={prefixPhoneNumber}
              onChange={handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>&nbsp;</Label>
            <Input
              type="tel"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleInputChange}
            />
          </FormGroup>
          <Button type="submit">Último paso</Button>
        </Form>
      </aside>
      <div className="btnDownload">
        <ButtonComponent label="Descargar Brochure" icon={downloadIcon} />
      </div>
    </div>
  );
}
