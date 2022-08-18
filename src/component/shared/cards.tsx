import "./../../sass/shared/_cards.scss";

interface Props {
  image: string;
  titleCard: string;
  detail: string;
}

export default function CardComponent(props: Props) {
  return (
    <div className="CardComponent">
      <img src={props.image} alt="" />
      <h3>{props.titleCard}</h3>
      <p>{props.detail}</p>
    </div>
  );
}
