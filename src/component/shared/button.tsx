import "./../../sass/shared/_button.scss";

interface Props {
  label: string;
  icon: string;
}

export default function ButtonComponent(props: Props) {
  return (
    <button className="btn-cta">
      {props.label}
      <img src={props.icon} alt="Icon" />
    </button>
  );
}
