import { useEffect } from "react";

import { Form, FormGroup, Label, Input, Button } from "./shared/forms";
import Spinner from "./spinner";

import python from "./../assets/python.png";
import duration from "./../assets/duration.svg";
import hours from "./../assets/hours.svg";
import price from "./../assets/price.svg";

import { useUserInfo } from "../hooks";
import { RedirectMP } from "../utils";
import "./../sass/component/_hero.scss";

export default function Hero() {
  const {
    firstName,
    lastName,
    email,
    prefixPhoneNumber,
    phoneNumber,
    loading,
    response,
    handleInputChange,
    handleSubmit,
  } = useUserInfo();

  useEffect(() => {
    RedirectMP(loading, response);

    // eslint-disable-next-line
  }, [loading]);

  return (
    <>
      {loading && <Spinner />}
      <div className="heroComponent">
        <div className="contentHero">
          <div>
            <div className="dflex fd-row">
              <img src={python} className="imgPy" alt="python" />
              <div className="dflex fd-col title">
                <h5>Aprende</h5>
                <span className="cover-text">Python</span>
                <small>como se debe.</small>
              </div>
            </div>
            <p>
              <b>En Groway</b> diseñamos este curso de Python basado en la
              experiencia acumulada de nuestros expertos para que puedas
              introducir y repasar los fundamentos de programación a través de{" "}
              <b>Python</b> de una forma sencilla, eficiente y divertida,
              recuerda que las bases son siempre importantes para crear
              conocimiento sólido y prepararte para trabajar en tu crecimiento
              profesional.
            </p>
            <p>
              Aprende sobre Estructuras de Datos, Principios SOLID, Patrones de
              Diseño, POO, Programación Funcional, Algoritmos y mucho más!
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
          <h2>Early Bird Sale</h2>
          <p>
            Aprovecha la venta anticipada para adquirir tu lugar en el curso con
            un precio especial!
          </p>
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
              <Label htmlFor="prefix1">+51</Label>
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
            <Button type="submit">Comprar por solo $39.00</Button>
          </Form>
        </aside>
      </div>
    </>
  );
}
