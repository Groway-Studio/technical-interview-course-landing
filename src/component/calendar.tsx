import "./../sass/component/_calendar.scss";

export default function Calendar() {
  return (
    <section className="calendarComponent">
      <aside className="weekDays">
        <h3>Programa</h3>
        <article>
          <div className="weeks">
            <div className="week">Semana 1</div>
            <div className="days">
              <span>Sabado</span>
              <span>Domingo</span>
            </div>
          </div>
          <div className="weeks">
            <div className="week">Semana 2</div>
            <div className="days">
              <span>Sabado</span>
              <span>Domingo</span>
            </div>
          </div>
          <div className="weeks">
            <div className="week">Semana 3</div>
            <div className="days">
              <span>Sabado</span>
              <span>Domingo</span>
            </div>
          </div>
          <div className="weeks">
            <div className="week">Semana 4</div>
            <div className="days">
              <span>Sabado</span>
              <span>Domingo</span>
            </div>
          </div>
        </article>
      </aside>
      <aside className="classHours">
        <article className="hours">
          <div className="item">10:00 - 10:30</div>
          <div className="item">10:30 - 10:50</div>
          <div className="item">12:00 - 12:30</div>
          <div className="item">12:30 - 13:00</div>
        </article>
        <article className="courses">
          <div className="week-days">
            <div className="dayOne">
              <div className="item-1">
                Bienvenida y repaso de conceptos basicos de programación
              </div>
              <div className="item-1">
                ¿Que es el codigo idiomatico?, el Zen de Python y PEP8
              </div>
              <div className="item-1">
                Compiladores, Interpretes y el Interprete de Python
              </div>
              <div className="item-1">
                Ejecutando codigo e Introduccion a la sintaxis del lenguaje
              </div>
            </div>
            <div className="dayOne">
              <div className="item-1">Programacion estructurada, Variables y Estructuras de control</div>
              <div className="item-1 highlights">Tipos de datos y Operadores</div>
              <div className="item-1">Introduccion a las estructuras de datos, Listas, Tuplas y Diccionarios</div>
              <div className="item-1">Operaciones con estructuras de datos</div>
            </div>
          </div>
          <div className="week-days">
            <div className="dayOne">
              <div className="item-2">Estructuras de datos avanzadas (Colas, Pilas, Sets, Arboles, Listas enlazadas, etc) </div>
              <div className="item-2 highlights">Algoritmos utiles con estructuras de datos</div>
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
