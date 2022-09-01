import { useEffect } from "react";

import { Form, FormGroup, Label, Input, Button } from "./shared/forms";
import Spinner from "./spinner";

import python from "./../assets/python.png";
import duration from "./../assets/duration.svg";
import hours from "./../assets/hours.svg";
import price from "./../assets/price.svg";

import { useUserInfo } from "../hooks";
import { RedirectMP, getCurrentPrice, dateValitation } from "../utils";
import "./../sass/component/_hero.scss";

export default function Hero() {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    loading,
    response,
    error,
    handleInputChange,
    handleSubmit,
  } = useUserInfo();

  useEffect(() => {
    RedirectMP(loading, response);

    // eslint-disable-next-line
  }, [loading]);

  return (
    <>
      {loading && <Spinner info={true} />}
      {!!error && <p className="error-message">{error}</p>}
      <div className="heroComponent">
        <div className="contentHero">
          <div className="header-title">
            <div className="dflex fd-row">
              <img src={python} className="imgPy" alt="python" />
              <div className="dflex fd-col title">
                <h5>Aprende</h5>
                <span className="cover-text">Python</span>
                <small>como se debe...</small>
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
              <img src={duration} alt="hours" />
              <figcaption>
                <span>
                  <b>Inicio</b> <br />
                  22 Septiembre
                </span>
                <span>
                  <b>Duración</b> <br />4 semanas
                </span>
              </figcaption>
            </figure>
            <figure className="item">
              <img src={hours} alt="hours" />
              <figcaption>
                <span>
                  Sábados y <br />
                  Domingos
                </span>
                <span>de 9:00 a 12:00</span>
              </figcaption>
            </figure>
            <figure className="item">
              <img src={price} alt="price" />
              <figcaption>
                <span>Costo</span>
                <h2>
                  <b>USD 150.00</b>
                </h2>
              </figcaption>
            </figure>
          </article>
        </div>
        <aside className="formInfo-hero">
          <div className="formInfo-hero__ribbon">33% OFF</div>
          <h2>
            Early Bird <span>Sale!</span>
          </h2>
          <p>
            ¡Aprovecha la venta anticipada para adquirir tu lugar en el curso
            con un precio especial!
          </p>
          <Form id="checkoutForm" onSubmit={handleSubmit}>
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
                type="text"
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
                name="phoneNumber"
                value={phoneNumber}
                maxLength={12}
                onChange={handleInputChange}
              />
            </FormGroup>

            <div className="offer">
              <div>
                <small>USD</small>
                <span>150</span>
              </div>
            </div>

            <Button type="submit">
              Comprar por USD {getCurrentPrice()}.00
            </Button>
          </Form>
        </aside>
      </div>
    </>
  );
}
