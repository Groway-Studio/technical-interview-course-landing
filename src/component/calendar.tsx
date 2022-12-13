import "./../sass/component/_calendar.scss";

export default function Calendar() {
  return (
    <section className="calendarComponent-container">
      <h3>Programa</h3>
      <div className="calendarComponent">
        <aside className="weekDays">
          <article>
            <div className="weeks">
              <div className="week">Semana 1</div>
              <div className="days">
                <span>Sábado</span>
                <span>Domingo</span>
              </div>
            </div>
            <div className="weeks">
              <div className="week">Semana 2</div>
              <div className="days">
                <span>Sábado</span>
                <span>Domingo</span>
              </div>
            </div>
            <div className="weeks">
              <div className="week">Semana 3</div>
              <div className="days">
                <span>Sábado</span>
                <span>Domingo</span>
              </div>
            </div>
            <div className="weeks">
              <div className="week">Semana 4</div>
              <div className="days">
                <span>Sábado</span>
                <span>Domingo</span>
              </div>
            </div>
          </article>
        </aside>
        <aside className="classHours">
          {/* <article className="hours">
          <div className="item">10:00 - 10:30</div>
          <div className="item">10:30 - 11:00</div>
          <div className="item">11:00 - 11:30</div>
          <div className="item">11:30 - 12:00</div>
          <div className="item">12:00 - 12:30</div>
          <div className="item">12:30 - 13:00</div>
        </article> */}
          <article className="courses">
            <div className="week-days">
              <div className="dayOne">
                <div className="item-3">Fundamentos de programacion</div>
                <div className="item-3 highlights">Resolviendo ejercicos basicos de entrevista tecnica</div>
              </div>
              <div className="dayOne">
                <div className="item-1 ">Notacion Big(O)</div>
                <div className="item-1 ">Diseño de algoritmos</div>
                <div className="item-1 ">Algoritmos Utiles</div>
                <div className="item-3 highlights">Resolviendo ejercicios algoritmicos</div>
              </div>
            </div>
            <div className="week-days">
              <div className="dayOne">
                <div className="item-2">Listas, Tuplas, Diccionarios</div>
                <div className="item-1">Estructuras de datos avanzadas</div>
                <div className="item-3 highlights">Resolviendo ejercicos con estructuras de datos</div>
              </div>
              <div className="dayOne">
                <div className="item-1">Programación orientada a objetos</div>
                <div className="item-1">Pensando en objetos</div>
                <div className="item-1">Principios de la orientación a objetos</div>
                <div className="item-3 highlights">Resolviendo ejercicios con POO</div>
              </div>
            </div>
            <div className="week-days">
              <div className="dayOne">
                <div className="item-2">Patrones de Diseño</div>
                <div className="item-1">Principios SOLID</div>
                <div className="item-3 highlights">
                  <span className="calendar__titles_highlights">
                    Proyecto:
                  </span>
                  <p>
                    Construyendo un MicroFramework Web MVC
                  </p>
                </div>
              </div>
              <div className="dayOne">
                <div className="item-1">Testing</div>
                <div className="item-1">TDD</div>
                <div className="item-1">Analisis Estatico</div>
                <div className="item-3 highlights">
                  <span className="calendar__titles_highlights">
                    Proyecto:
                  </span>
                  <p>
                    Blog usando Flask y TDD
                  </p>
                </div>
              </div>
            </div>
            <div className="week-days">
              <div className="dayOne">
                <div className="item-1">Hilos y Concurrencia</div>
                <div className="item-2">Programación Reactiva</div>
                <div className="item-3 highlights">
                  <span className="calendar__titles_highlights">
                    Proyecto:
                  </span>
                  <p>
                    Chat en tiempo real
                  </p>
                </div>
              </div>
              <div className="dayOne">
                <div className="item-1">Compiladores e Interpretes</div>
                <div className="item-1">Python Internals</div>
                <div className="item-1">Metaprogramación</div>
                <div className="item-3 highlights">
                  <span className="calendar__titles_highlights">
                    Proyecto:
                  </span>
                  <p>
                    Construyendo un DSL
                  </p>
                </div>
              </div>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}
