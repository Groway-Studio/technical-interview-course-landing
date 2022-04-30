import * as React from "react";
import "./../sass/component/_hero.scss";

import python from "./../assets/python.png";

import duration from "./../assets/duration.svg";
import hours from "./../assets/hours.svg";
import price from "./../assets/price.svg";

import ButtonComponent from "./shared/button";
import { Form, FormGroup, Label, Input, TextArea, Button } from "./shared/forms";
import downloadIcon from "./../assets/download.svg"

export default function Hero() {
  return (
    <React.Fragment>
      <div className={"heroComponent"}>
        <div className="contentHero">
          <div>
            <div className="dflex fd-row">
              <img src={python} className="imgPy" alt="" />
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
              sitios web escalables, realizar calculos estructurales complejos,
              videojuegos, entre muchisimas cosas más.
            </p>
          </div>

          <article className="presitions">

            <figure className="item">
              <img src={duration} alt="" />
              <figcaption>
                <strong>Duración</strong>
                <span>3 semanas</span>
              </figcaption>
            </figure>

            <figure className="item">
              <img src={hours} alt="" />
              <figcaption>
                <strong>Horario</strong>
                <span>15:00 a 17:00</span>
              </figcaption>
            </figure>

            <figure className="item">
              <img src={price} alt="" />
              <figcaption>
                <strong>Costo</strong>
                <span>150 usd</span>
              </figcaption>
            </figure>
          </article>
          <div className="btnDownload">
            <ButtonComponent label="Descargar Brochure" icon={downloadIcon} />
          </div>
        </div>  
        
        <aside className="formInfo-hero">
          <Form>
            <FormGroup>
              <h2>Más información</h2>
              <Label htmlFor="label">
                Dejanos tus datos y nuestro equipo se pondrá en contacto contigo
                para asesorarte sobre el curso
              </Label>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="label">¿Cuál es tu nombre?*</Label>
              <Input id="label" />
            </FormGroup>
            <FormGroup>
              <Label>¿Cuál es tu el sitio web de tu empresa?</Label>
              <Input />
            </FormGroup>
            <FormGroup>
              <Label>Tu mensaje</Label>
              <TextArea />
            </FormGroup>
            <FormGroup>
              <Label>¿Cómo nos contactamos contigo?*</Label>
              <Input />
            </FormGroup>
            <Button>Enviar</Button>
          </Form>
        </aside>
      </div>
   
    </React.Fragment>
  );
}
