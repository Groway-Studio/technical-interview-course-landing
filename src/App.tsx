import { Routes, Route } from "react-router-dom";

import { Error, Home, Payment } from "./pages";
import ServerError from "./assets/error/500.svg";
import NotFound from "./assets/error/404.svg";

import TagManager from 'react-gtm-module'

import "./sass/style.scss";

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: Record<string, any>
  }
}


export default function App() {

  const tagManagerArgs = {
    gtmId: 'G-T1WNEB8F9Q'
  }

  TagManager.initialize(tagManagerArgs)
  
  
  return (
    <Routes>
      <Route path="/pago-exitoso" element={<Payment />} />
      <Route path="/pago-fallido" element={<Payment />} />
      <Route path="/pago-pendiente" element={<Payment />} />
      <Route path="/" index={false} element={<Home />} />
      <Route path="/" element={<Home />} />
      
      <Route
        path="/server-error"
        element={
          <Error
            code="500"
            image={ServerError}
            paragraph1="¡Ocurrió un error inesperado en el servidor!"
            paragraph2="Espere un momento o repórtelo a"
            contactInfo="bugs@groway.studio"
          />
        }
      />

      <Route
        path="/404"
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
