import "../sass/component/_spinner.scss";

interface Props {
  info?: boolean;
}

const Spinner = ({ info }: Props) => {
  return (
    <div className="loadingio-spinner-eclipse-r5qwc0ticrn">
      <div className="ldio-he9ppiasvpj">
        <div></div>
        {info === true && <p>Procesando los datos...</p>}
      </div>
    </div>
  );
};

export default Spinner;
