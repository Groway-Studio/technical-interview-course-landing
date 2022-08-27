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
                <div className="item-2">
                  Bienvenida y repaso de conceptos básicos de programación{" "}
                </div>
                <div className="item-1">Zen de Python y PEP8</div>
                <div className="item-1">El Intérprete de Python</div>
                <div className="item-2">Variables y Tipos de Datos</div>
              </div>
              <div className="dayOne">
                <div className="item-2">Operadores, Expresiones, I/O</div>
                <div className="item-2">
                  <span className="calendar__titles_highlights">
                    Programación estructurada:
                  </span>
                  <p>Condicionales, Bucles, Iteradores</p>
                </div>
                <div className="item-2">
                  <span className="calendar__titles_highlights">
                    Estructuras de datos:
                  </span>
                  <p>Listas, Tuplas, Diccionarios</p>
                </div>
              </div>
            </div>
            <div className="week-days">
              <div className="dayOne">
                <div className="item-1">Manejo de errores y Debugging</div>
                <div className="item-3 highlights">
                  <span className="calendar__titles_highlights">
                    Programación modular:
                  </span>
                  <p>Funciones, Argumentos, Paquetes, etc</p>
                </div>
                <div className="item-2">
                  La biblioteca estándar de Python, Entornos Virtuales, PIP y
                  Bibliotecas de terceros
                </div>
              </div>
              <div className="dayOne">
                <div className="item-3 highlights">
                  <span className="calendar__titles_highlights">
                    Estructuras de datos Avanzado:
                  </span>
                  <p>Pilas, Colas, Listas enlazadas, Arboles, etc.</p>
                </div>
                <div className="item-2">
                  Algoritmos con estructuras de datos avanzadas
                </div>
                <div className="item-1">Principios de diseño de algoritmos</div>
              </div>
            </div>
            <div className="week-days">
              <div className="dayOne">
                <div className="item-4 highlights">
                  <span className="calendar__titles_highlights">
                    Algoritmos Útiles:
                  </span>
                  <p>
                    Búsqueda, Ordenamiento, Grafos, Programación Dinámica, etc
                  </p>
                </div>

                <div className="item-2">
                  Análisis de complejidad Algorítmica
                </div>
              </div>
              <div className="dayOne">
                <div className="item-3 highlights">
                  <span className="calendar__titles_highlights">
                    Programación Orientada a Objetos:
                  </span>
                  <p>Clases, Herencia, Encapsulamiento, Polimorfismo, etc</p>
                </div>
                <div className="item-3 highlights">
                  <span className="calendar__titles_highlights">
                    Patrones de diseño:
                  </span>
                  <p>
                    Factory, Builder, Adapter, Facade, Strategy, Observer, etc
                  </p>
                </div>
              </div>
            </div>
            <div className="week-days">
              <div className="dayOne">
                <div className="item-4 highlights">
                  <span className="calendar__titles_highlights">
                    Programación Funcional:
                  </span>
                  <p>
                    Cálculo Lambda, Funciones de Orden Superior, Transparencia
                    referencial, etc
                  </p>
                </div>
                <div className="item-2 highlights">
                  <span className="calendar__titles_highlights">
                    Buenas prácticas de programación:
                  </span>
                  <p>Principios SOLID / KISS / DRY, Antipatrones</p>
                </div>
              </div>
              <div className="dayOne">
                <div className="item-3 highlights">
                  <span className="calendar__titles_highlights">Testing:</span>
                  <p>Test unitarios, Fixtures, Github CI, Coverage</p>
                </div>
                <div className="item-3">
                  <span className="calendar__titles_highlights">
                    Tópicos Avanzados:
                  </span>
                  <p>Metaprogramación, Concurrencia, Reactividad</p>
                </div>
              </div>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}
