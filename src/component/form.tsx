import { Form, FormGroup, Label, Input, Button } from "./shared/forms";

import logoWhite from "./../assets/logo-white.png";
import "../sass/component/_form.scss";

export default function FormContact() {
  return (
    <div className="formComponent">
      <section className="container">
        <article className="talkto">
          <aside className="dflex fd-col jc-sb ">
            <div className="talkto__title">
              <h2>Inscríbete</h2>
              <p>Sólo necesitas completar tus datos:</p>
            </div>
            <div className="logo">
              <img src={logoWhite} alt="Logo White" />
            </div>
          </aside>
          <aside className="formInfo">
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
                <Label htmlFor="prefijo1">+54</Label>
                <Label htmlFor="prefijo1">Teléfono</Label>
                <Input type="tel" id="prefijo1" />
              </FormGroup>
              <FormGroup>
                <Label>&nbsp;</Label>
                <Input type="tel" />
              </FormGroup>
              <Button>Último paso</Button>
            </Form>
          </aside>
        </article>
      </section>
    </div>
  );
}
