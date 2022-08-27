import { Link } from "react-router-dom";
import "../sass/shared/_404.scss";

interface Props {
  image: string;
  paragraph1: string;
  paragraph2: string;
  code: "404" | "500";
  contactInfo?: string;
}

const Error = ({ image, paragraph1, paragraph2, code, contactInfo }: Props) => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img
            src="assets/img/groway-gray.svg"
            alt="Groway.Studio"
            draggable="false"
          />
        </Link>
      </nav>
      <div className="content">
        <img src={image} alt={code} draggable="false" />

        <div className="info">
          <p>{paragraph1}</p>

          {code === "500" ? (
            <p>
              {paragraph2} <a href={`mailto:${contactInfo}`}>{contactInfo}</a>.
            </p>
          ) : (
            <p>{paragraph2}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Error;
