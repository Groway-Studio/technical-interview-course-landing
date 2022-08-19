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
      <img src={image} alt={title} className="paymentCard__image" />
      <h2 className={`paymentCard__title ${type}`}>{title}</h2>
      <p className={`paymentCard__message ${type}`}>{message}</p>
    </section>
  );
};

export default PaymentCard;
