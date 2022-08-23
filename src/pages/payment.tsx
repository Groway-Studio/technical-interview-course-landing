import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../component/shared/header";
import PaymentCard from "../component/payment_card";
import { failed, pending, success } from "../assets/payment-status";
import { payment_id, validPaths, keystore } from "../utils";

const Payment = () => {
  const { pathname } = useLocation();

  const user_data = localStorage.getItem(keystore.USER_DATA);

  useEffect(() => {
    (async () => {
      if (
        pathname === validPaths.success &&
        (user_data !== "" || user_data !== undefined)
      ) {
        try {
          const user = JSON.parse(user_data || "");

          const response = await fetch(
            "https://python-course-function-git-main-joelibaceta.vercel.app/api/new_sale.py",
            {
              body: JSON.stringify({ ...user, payment_id }),
              headers: {
                "Content-Type": "application/json",
                // prettier-ignore
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*",
              },
              mode: "cors",
              method: "POST",
            }
          );

          const data = await response.json();

          if (data === "OK") {
            localStorage.clear();
          }

          console.log(data);
        } catch (error: any) {
          throw new Error(error);
        }
      }
    })();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header image={true} />
      {pathname === validPaths.success && (
        <PaymentCard
          image={success}
          title="Pago exitoso"
          message="Te esperamos en el curso para aprender juntos"
          type="success"
        />
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
