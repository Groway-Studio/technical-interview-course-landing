import * as React from "react";
import "../sass/component/_form.scss";
import logoWhite from "./../assets/logo-white.png";


import { Form, FormGroup, Label, Input,TextArea, Button } from "./shared/forms";

export default function FormContact() {
  return (
    <React.Fragment>
      <div className="formComponent">
        <section className="container">
          <hr className="hrLine"/>
          <article className="talkto">
            <aside className="dflex fd-col jc-sb ">
              <div>
                <h1>Más información</h1>
                <br />
                <p>
                  Dejanos tus datos y nuestro equipo se pondrá en contacto contigo
                  para poder hacer realidad esta alianza.
                </p>
              </div>
              <div className="logo">
                  <img src={logoWhite} alt="Logo White" />
              </div>
            </aside>
            <aside className="formInfo">
              <Form>
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
                <Button> Enviar </Button>
              </Form>

             
            </aside>
          </article>
        </section>
      </div>
    </React.Fragment>
  );
}
