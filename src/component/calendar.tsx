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
                <div className="item-1">Zen de Python y PEP8 </div>
                <div className="item-1">El Intérprete de Python</div>
                <div className="item-2">Variables y Tipos de Datos</div>
              </div>
              <div className="dayOne">
                <div className="item-2">Operadores, Expresiones, I/O</div>
                <div className="item-2">
                  <b>Programación estructurada:</b>Condicionales, Bucles,
                  Iteradores
                </div>
                <div className="item-2">
                  <b>Estructuras de datos:</b>Listas, Tuplas, Diccionarios
                </div>
              </div>
            </div>
            <div className="week-days">
              <div className="dayOne">
                <div className="item-1">Manejo de errores y Debugging
                </div>
                <div className="item-3 highlights">
                  <b>Programación modular: </b>Funciones, Argumentos, Paquetes,
                  etc
                </div>
                <div className="item-2">
                  La biblioteca estándar de Python, Entornos Virtuales, PIP y
                  Bibliotecas de terceros
                </div>

              </div>
              <div className="dayOne">
                <div className="item-3 highlights">
                  <b>Estructuras de datos Avanzado: </b> Pilas, Colas, Listas enlazadas, Arboles, etc
                </div>
                <div className="item-2">Algoritmos utiles con estructuras de datos</div>
                <div className="item-1">Principios de diseño de algoritmos</div>
                
              </div>
            </div>
            <div className="week-days">
              <div className="dayOne">
                <div className="item-4 highlights">
                  <b>Algoritmos Útiles: </b> Búsqueda, Ordenamiento, Grafos,
                  Programación Dinámica, etc
                </div>

                <div className="item-2">
                  Análisis de complejidad Algorítmica
                </div>
              </div>
              <div className="dayOne">
                <div className="item-3 highlights">
                  <b>Programación Orientada a Objetos: </b>Clases, Herencia, Encapsulamiento, Polimorfismo,
                  etc
                </div>
                <div className="item-3 highlights">
                  <b>Patrones de diseño: </b>Factory, Builder, Adapter, Facade,
                  Strategy, Observer, etc
                </div>
                
              </div>
            </div>
            <div className="week-days">
              <div className="dayOne">
                <div className="item-4 highlights">
                  <b>Programación Funcional: </b>Calculo Lambda, Funciones de Orden
                  Superior, Transparencia referencial, etc
                </div>
                <div className="item-2 highlights">
                  <b>Buenas prácticas de programación: </b>Principios SOLID /
                  KISS / DRY, Antipatrones
                </div>
                
              </div>
              <div className="dayOne">
                
                <div className="item-3 highlights">
                  <b>Testing: </b>Test unitarios, Fixtures, Github CI, Coverage
                </div>
                <div className="item-3">
                  <b>Topicos Avanzados: </b> Metaprogramación, Concurrencia, Reactividad
                </div>
              </div>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}
