import { useEffect } from "react";

import { Form, FormGroup, Label, Input, Button } from "./shared/forms";
import Spinner from "./spinner";

import python from "./../assets/python.png";
import duration from "./../assets/duration.svg";
import hours from "./../assets/hours.svg";
import price from "./../assets/price.svg";

import { useUserInfo } from "../hooks";
import { RedirectMP, getCurrentPrice } from "../utils";
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
                <h5>Preparate para </h5>
                <span className="cover-text">Tu entrevista Técnica</span>
                <small>como se debe...</small>
              </div>
            </div>
            <p>
              Aprendiste Python de forma autodidacta y ¿Sientes que te va mal en las entreivstas tecnicas
              por que te falta profundizar en los fundamentos de programacion?, En Groway Academy diseñamos 
              este curso para ayudarte a prepararte para tu entrevista tecnica backend aprendiendo todos los 
              conceptos que necesitaras para mejorar tu perfil profesional y llevar adelante una entrevista exitosa.
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
                  15 Enero
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
                  <b>USD 99.00</b>
                </h2>
              </figcaption>
            </figure>
          </article>
        </div>
        <aside className="formInfo-hero">
          {/* <div className="formInfo-hero__ribbon">33% OFF</div> */}
          <h2>
            Early Bird <span>Sale!</span>
          </h2>
          {/* <p>
            ¡Aprovecha este curso para adquirir conocimientos en el lenguaje de
            programación Python de la mano de un experto en el campo!
          </p> */}
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
                <span>99</span>
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
