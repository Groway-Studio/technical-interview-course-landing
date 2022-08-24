import { BrowserRouter, HashRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home, Payment } from "./pages";

import "./sass/style.scss";

export default function App() {
  return (
    <HashRouter basename="https://aprendepython.groway.studio/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pago-exitoso" element={<Payment />} />
        <Route path="/pago-fallido" element={<Payment />} />
        <Route path="/pago-pendiente" element={<Payment />} />
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Routes>
    </HashRouter>
  );
}
