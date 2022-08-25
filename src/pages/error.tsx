import "../index.css";

interface Props {
  image: string;
  paragraph1: string;
  paragraph2: string;
  code: string;
}

const Error = ({ image, paragraph1, paragraph2, code }: Props) => {
  return (
    <>
      <nav>
        <img
          src="assets/img/groway-gray.svg"
          alt="Groway.Studio"
          draggable="false"
        />
      </nav>
      <div className="content">
        <img src={image} alt={code} draggable="false" />

        <div className="info">
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
        </div>
      </div>
    </>
  );
};

export default Error;
