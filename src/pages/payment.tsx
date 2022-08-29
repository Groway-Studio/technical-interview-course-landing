import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Header } from "../component/shared";
import { PaymentCard } from "../component";
import { failed, pending, success } from "../assets/payment-status";
import { getParameterByName, validPaths, keystore } from "../utils";
import arrow from "../assets/faqs/arrow.svg";

const Payment = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const user_data = localStorage.getItem(keystore.USER_DATA);

  useEffect(() => {
    (async () => {
      if (pathname === validPaths.success && !!user_data) {

        window.dataLayer.push({
          event: 'checkout_completed'
        });

        try {
          const payload = JSON.parse(user_data || "");

          payload["payment_id"] = getParameterByName("payment_id");

          let saleUrl = "https://python-course-function-git-main-joelibaceta.vercel.app/api/new_sale.py";

          if (process.env.NODE_ENV === "development") {
            saleUrl += "?sandbox=true"
          } else {
            saleUrl += "?sandbox=false"
          }

          const response = await fetch(
            saleUrl,
            {
              body: JSON.stringify(payload),
              method: "POST",
            }
          );

          const data = await response.text();

          console.log(data);

          // if (data === "OK") {
          localStorage.removeItem(keystore.USER_DATA);
          // }
        } catch (error: any) {
          navigate("/server-error");
          throw new Error(error);
        }
      }
    })();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header image={true} />

      <Link to="/" className="go_back">
        <img src={arrow} alt="arrow" />
        Regresar
      </Link>

      {pathname === validPaths.success && (
        <>
          <PaymentCard
            image={success}
            title="Pago exitoso"
            message="Te hemos enviado un correo de confirmación"
            type="success"
          />
        </>
      )}
      {pathname === validPaths.failed && (
        <PaymentCard
          image={failed}
          title="Pago fallido"
          message="Ocurrió un error al procesar el pago"
          type="failed"
        />
      )}
      {pathname === validPaths.pending && (
        <PaymentCard
          image={pending}
          title="Pago pendiente"
          message="Debes completar el pago en las próximas 24 horas."
          type="pending"
        />
      )}
    </>
  );
};

export default Payment;
