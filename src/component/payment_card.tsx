import { FiFacebook, FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import "../sass/component/_payment_card.scss";

interface Props {
  image: string;
  title: string;
  message: string;
  type: "success" | "failed" | "pending";
}

const PaymentCard = ({ image, title, message, type }: Props) => {
  return (
    <section className="paymentCard">
      <img
        src={image}
        alt={title}
        className="paymentCard__image"
        draggable={false}
      />
      <h2 className={`paymentCard__title ${type}`}>{title}</h2>
      <p className={`paymentCard__message ${type}`}>{message}</p>

      {type === "success" && (
        <>
          <p className="share-content">
            Cuéntale a tus amigos sobre este curso!
          </p>
          <div className="social-media">
            <FiFacebook />
            <FiTwitter />
            <FaWhatsapp />
          </div>
        </>
      )}
    </section>
  );
};

export default PaymentCard;
