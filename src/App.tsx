import { Routes, Route } from "react-router-dom";

import { Error, Home, Payment } from "./pages";
import ServerError from "./assets/error/500.svg";
import NotFound from "./assets/error/404.svg";

import "./sass/style.scss";

export default function App() {
  return (
    <Routes>
      <Route path="/pago-exitoso" element={<Payment />} />
      <Route path="/pago-fallido" element={<Payment />} />
      <Route path="/pago-pendiente" element={<Payment />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/500"
        element={
          <Error
            code="500"
            image={ServerError}
            paragraph1="¡Ocurrió un error inesperado en el servidor!"
            paragraph2="Espere un momento o contacte al Soporte Técnico de la compañía"
          />
        }
      />
      <Route
        path="*"
        element={
          <Error
            code="404"
            image={NotFound}
            paragraph1="El sitio configurado en esta dirección no contiene el archivo solicitado."
            paragraph2="Si este es su sitio, asegúrese de que el nombre del archivo coincida
          con la URL."
          />
        }
      />
    </Routes>
  );
}
