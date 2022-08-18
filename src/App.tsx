import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Home, Payment } from "./pages";

import "./sass/style.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pago-exitoso" element={<Payment />}></Route>
        <Route path="/pago-fallido" element={<Payment />}></Route>
        <Route path="/pago-pendiente" element={<Payment />}></Route>
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
