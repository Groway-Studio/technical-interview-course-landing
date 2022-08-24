import { HashRouter, Routes, Route } from "react-router-dom";



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
        {/* <Route path="*" element={<Navigate to="/" replace />}></Route> */}
      </Routes>
    </HashRouter>
  );
}
