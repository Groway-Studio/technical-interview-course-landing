import "./../sass/component/_faq.scss";

export default function Faqs() {
  return (
    <>
      <section className="FaqComponent">
        <aside>
          <h1>Preguntas Frecuentes</h1>
        </aside>
        <aside>
          <article>
            <h2>¿A quién va dirigido el curso?</h2>
            <p>
              Este curso está pensado en todos aquellos programadores con poca o
              ninguna experiencia usando Python y que quieran aprender en
              profundidad el uso de este lenguaje sin dejar de lado las bases y
              fundamentos de programación.
            </p>
          </article>
          <article>
            <h2>¿Cuándo inicia el curso?</h2>
            <p>
              El inicio del curso está programado para el día 21 de Septiembre
              de 2022.
            </p>
          </article>
          <article>
            <h2>¿Qué hace a este curso diferente a los demás?</h2>
            <p>
              Este curso te permitirá no sólo aprender la sintaxis de un
              lenguaje de programación, sino repasar los fundamentos de
              programación, buenas prácticas, algoritmos y otros temas que te
              permitirán conocer en profundidad el lenguaje y sus
              particularidades.
            </p>
          </article>
          <article>
            <h2>¿Qué material se incluye en el curso?</h2>
            <p>
              Este curso incluye material de apoyo para que puedas aprender a
              programar en Python de una forma sencilla, eficiente y divertida.
              Durante el desarrollo del curso contarás con los siguientes
              materiales de apoyo:
            </p>
            <ul>
              <li>Presentaciones expuestas en las sesiones</li>
              <li>
                Acceso al repositorio de código con todos los ejemplos del curso
              </li>
              <li>
                Libro <b>Python para todos</b> en formato PDF
              </li>
              <li>
                Banco de preguntas de entrevistas técnicas sobre Python y
                ejercicios para que puedas practicar
              </li>
            </ul>
          </article>
          <article>
            <h2>¿Cuánto tiempo seguirá disponible la tarifa early bird?</h2>
            <p>
              El precio especial de compra anticipada estará disponible hasta el
              día 31 de Agosto de 2022.
            </p>
          </article>
          <br />
        </aside>
      </section>
    </>
  );
}
