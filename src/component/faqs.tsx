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
            <h2>¿A quien va dirigido el curso?</h2>
            <p>
              Este curso esta pensado en todos aquellos programadores con poca o ninguna experiencia usando Python y que quieran aprender en profundidad el uso de este lenguaje sin dejar de lado las bases y fundamentos de programación.
            </p>
          </article>
          <article>
            <h2>¿Cuando inicia el curso?</h2>
            <p>
              El inicio del curso esta programado para el dia 21 de Septiembre de 2022.
            </p>
          </article>
          <article>
            <h2>¿Que hace a este curso diferente a los demas?</h2>
            <p>
              Este curso te permitira no solo aprender la sintanxis de un lenguaje de programacion sino repasar los fundamentos de programacion, buenas practicas, algoritmos y otros temas que te permitiran conocer en profundidad el lenguaje y sus particularidades.
            </p>
          </article>
          <article>
            <h2>¿Que material se incluye en el curso?</h2>
            <p>
              Este curso incluye material de apoyo para que puedas aprender a programar en Python de una forma sencilla, eficiente y divertida. Durante el desarrollo del curso contaras con los siguientes materiales de apoyo:
              <ul>
                <li>Presentaciones expuestas en las sesiones</li>
                <li>Acceso al repositorio de codigo con todos los ejemplos del curso</li>
                <li>Libro <b>Python para todos</b> en formato PDF</li>
                <li>Banco de preguntas de entrevistas tecnicas sobre Python y ejercicios para que puedas practicar</li>
              </ul>
            </p>
          </article>
          <article>
            <h2>¿Cuanto tiempo seguira disponible la tarifa early bird?</h2>
            <p>
              El precio especial de compra anticipada estara disponible durante hasta el dia 31 de Agosto de 2022.
            </p>
          </article>
          <br/>
        </aside>
      </section>
    </>
  );
}