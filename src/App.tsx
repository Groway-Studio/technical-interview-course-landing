import { Routes, Route } from "react-router-dom";

import { Home, Payment } from "./pages";

import "./sass/style.scss";

export default function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   console.log(window.location.origin);
  //   if (window.location.href.split(window.location.origin)[1] === "/") {
  //     window.history.replaceState(null, "", "/#");
  //   } else if (
  //     window.location.href.split(window.location.origin)[1].split("")[1] !== "#"
  //   ) {
  //     // console.log(window.location.origin + "/#/not-found");
  //     // window.history.replaceState(
  //     //   null,
  //     //   "",
  //     //   window.location.origin + "/#/not-found"
  //     // );

  //     // navigate(window.location.origin + "#/not-found");
  //     window.location.replace(window.location.origin + "#/not-found");
  //     // window.location.replace(window.location.origin + "/#/not-found")
  //   }

  //   // eslint-disable-next-line
  // }, []);

  return (
    <Routes>
      <Route path="/pago-exitoso" element={<Payment />} />
      <Route path="/pago-fallido" element={<Payment />} />
      <Route path="/pago-pendiente" element={<Payment />} />
      <Route path="/" element={<Home />} />;
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}
