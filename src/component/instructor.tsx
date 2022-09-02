import "../sass/component/_instructor.scss";

import profile from "./../assets/profile.jpg";

export default function Instructor() {
  return (
    <section className="instructor">
      <div
        className="instructor__profile-image"
        style={{
          backgroundImage: `url(${profile})`,
        }}
      ></div>
      <div className="instructor__profile-info">
        <h3>Sobre el Instructor</h3>
        <p>
          Joel Ibaceta es un programador experimentado con más de 15 años de
          experiencia en la industria, ha trabajado en diversas empresas a lo
          largo de Latinoamérica, desde startups, corporaciones y unicornios.
        </p>
        <p>
          Actualmente es CTO de Kwema Inc. en los Estados Unidos, uno de sus
          últimos emprendimientos donde lleva adelante proyectos sobre IOT para
          la seguridad laboral.
        </p>
        <p>
          Él nos acompañará desde Seúl, Corea del Sur, y será nuestro instructor
          en esta primera edición de nuestro curso de Python.
        </p>
      </div>
    </section>
  );
}
