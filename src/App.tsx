import { Routes, Route, HashRouter } from "react-router-dom";

import { Home, Payment } from "./pages";

import "./sass/style.scss";

export default function App() {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/pago-exitoso" element={<Payment />} />
        <Route path="/pago-fallido" element={<Payment />} />
        <Route path="/pago-pendiente" element={<Payment />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </HashRouter>
  );
}
