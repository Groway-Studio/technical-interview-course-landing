import "../sass/component/_instructor.scss";

import profile from "../assets/profile.png";

export default function Instructor() {
  return (
    <section className="instructor">
      <div 
        className="instructor__profile-image"
        style={{
          backgroundImage: `url(${profile})`,
        }}
      >
      </div>
      <div className="instructor__profile-info">
        <h2>Sobre el Instructor</h2>
        <p>
          Joel Ibaceta es un programador experimentado con mas de 15 años de experiencia en la industria, ha trabajando en diversas empresas a lo largo de la latinoamerica, desde startups, corporaciones y unicornios. 
        </p>
        <p>
          Actualmente es CTO de Kwema Inc. en los Estados Unidos, uno de sus ultimos emprendimientos donde lleva adelante proyectos sobre IOT para la seguridad laboral.
        </p>
        <p>
          El nos acompañara desde Seul, Corea del Sur, y sera nuestro instructor en esta primera edicion de nuestro curso de Python.
        </p>
      </div>
    </section>
  );
}
