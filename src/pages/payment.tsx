import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Header } from "../component/shared";
import { PaymentCard } from "../component";
import { failed, pending, success } from "../assets/payment-status";
import { payment_id, validPaths, keystore } from "../utils";
import arrow from "../assets/faqs/arrow.svg";

const Payment = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const user_data = localStorage.getItem(keystore.USER_DATA);

  useEffect(() => {
    (async () => {
      if (pathname === validPaths.success && !!user_data) {
        try {
          const user = JSON.parse(user_data || "");

          const response = await fetch(
            "https://python-course-function-git-main-joelibaceta.vercel.app/api/new_sale.py",
            {
              body: JSON.stringify({ ...user, payment_id }),
              method: "POST",
            }
          );

          const data = await response.text();

          if (data === "OK") {
            localStorage.removeItem(keystore.USER_DATA);
          }
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
            message="Te esperamos en el curso para aprender juntos"
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
          message="Estamos procesando tu pago"
          type="pending"
        />
      )}
    </>
  );
};

export default Payment;
