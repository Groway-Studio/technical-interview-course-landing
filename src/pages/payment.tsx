import { useLocation } from "react-router-dom";

import Header from "../component/shared/header";
import PaymentCard from "../component/payment_card";
import { failed, pending, success } from "../assets/payment-status";

const Payment = () => {
  const { pathname } = useLocation();

  const validPaths = {
    exito: "/pago-exitoso",
    fallido: "/pago-fallido",
    pendiente: "/pago-pendiente",
  };

  return (
    <>
      <Header image={true} />
      {pathname === validPaths.exito && (
        <PaymentCard
          image={success}
          title="Pago exitoso"
          message="Te esperamos en el curso para aprender juntos"
          type="success"
        />
      )}
      {pathname === validPaths.fallido && (
        <PaymentCard
          image={failed}
          title="Pago fallido"
          message="Ocurrió un error al procesar el pago"
          type="failed"
        />
      )}
      {pathname === validPaths.pendiente && (
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
