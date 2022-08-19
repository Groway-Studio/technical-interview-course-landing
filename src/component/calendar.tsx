import "./../sass/component/_calendar.scss";

export default function Calendar() {
  return (
    <section className="calendarComponent">
      <aside className="weekDays">
        <h3>Sistema de cursado</h3>
        <article>
          <div className="weeks">
            <div className="week">Semana 1</div>
            <div className="days">
              <span>Martes</span>
              <span>Jueves</span>
            </div>
          </div>
          <div className="weeks">
            <div className="week">Semana 2</div>
            <div className="days">
              <span>Martes</span>
              <span>Jueves</span>
            </div>
          </div>
          <div className="weeks">
            <div className="week">Semana 3</div>
            <div className="days">
              <span>Martes</span>
              <span>Jueves</span>
            </div>
          </div>
          <div className="weeks">
            <div className="week">Semana 4</div>
            <div className="days">
              <span>Martes</span>
              <span>Jueves</span>
            </div>
          </div>
        </article>
      </aside>
      <aside className="classHours">
        <article className="hours">
          <div className="item">30 min</div>
          <div className="item">60 min</div>
          <div className="item">90 min</div>
          <div className="item">120 min</div>
        </article>
        <article className="courses">
          <div className="week-days">
            <div className="dayOne">
              <div className="item-1">
                Bienvenida. Introducción y repaso Python
              </div>
              <div className="item-1">
                El interprete de Python, CPython y entornos visuales
              </div>
              <div className="item-2">
                Sintáxis Python. Tipos de datos, Operadores.
              </div>
            </div>
            <div className="dayOne">
              <div className="item-1">Programación estructurada</div>
              <div className="item-2 highlights">Ejercicios</div>
              <div className="item-1">Manejo de errores</div>
            </div>
          </div>
          <div className="week-days">
            <div className="dayOne">
              <div className="item-1">Listas, tuplas y colecciones</div>
              <div className="item-1">Algoritmos y estructura de datos</div>
              <div className="item-2 highlights">Ejercicios</div>
            </div>
            <div className="dayOne">
              <div className="item-2 highlights">
                Programación Modular (Funciones, Argumentos, Paquetes, Scopes)
              </div>
              <div className="item-1">Biblioteca estandar</div>
              <div className="item-1">Biblioteca de terceros (PIL)</div>
            </div>
          </div>
          <div className="week-days">
            <div className="dayOne">
              <div className="item-1">
                Introducción a la programación orientada a objetos
              </div>
              <div className="item-1">POO en Python</div>
              <div className="item-2 highlights">
                Ejercicios Problem Solving POO
              </div>
            </div>
            <div className="dayOne">
              <div className="item-1">Programación estructurada</div>
              <div className="item-2">Ejercicios</div>
              <div className="item-1">Manejo de errores</div>
            </div>
          </div>
          <div className="week-days">
            <div className="dayOne">
              <div className="item-1">
                Bienvenida. Introducción y repaso Python
              </div>
              <div className="item-1">
                El interprete de Python, CPython y entornos visuales
              </div>
              <div className="item-2">
                Sintáxis Python. Tipos de datos, Operadores.
              </div>
            </div>
            <div className="dayOne">
              <div className="item-1">Programación estructurada</div>
              <div className="item-2">Ejercicios</div>
              <div className="item-1">Manejo de errores</div>
            </div>
          </div>
        </article>
      </aside>
    </section>
  );
}
