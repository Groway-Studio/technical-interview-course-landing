import { useEffect } from "react";

import { Form, FormGroup, Label, Input, Button } from "./shared/forms";
import Spinner from "./spinner";

import { useUserInfo } from "../hooks";
import { RedirectMP } from "../utils";

import logoWhite from "./../assets/logo-white.png";
import "../sass/component/_form.scss";

export default function FormContact() {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    response,
    loading,
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
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label htmlFor="firstname">Nombre</Label>
                  <Input
                    id="firstname"
                    name="firstName"
                    value={firstName}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="lastname">Apellido</Label>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastName"
                    value={lastName}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email1">E-mail</Label>
                  <Input
                    type="email"
                    id="email1"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="prefix">+54</Label>
                  <Label htmlFor="prefix">Teléfono</Label>
                  <Input
                    type="tel"
                    id="prefix"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                <Button type="submit">Último paso</Button>
              </Form>
            </aside>
          </article>
        </section>
      </div>
    </>
  );
}
