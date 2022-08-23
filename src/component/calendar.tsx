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
          <div className="item">10:30 - 11:00</div>
          <div className="item">11:00 - 11:30</div>
          <div className="item">11:30 - 12:00</div>
          <div className="item">12:00 - 12:30</div>
          <div className="item">12:30 - 13:00</div>
        </article>
        <article className="courses">
          <div className="week-days">
            <div className="dayOne">
              <div className="item-2">
                Bienvenida y repaso de conceptos basicos de programación
              </div>
              <div className="item-1">
                ¿Que es el codigo idiomatico?, el Zen de Python y PEP8
              </div>
              <div className="item-1">
                Compiladores, Interpretes y el Interprete de Python
              </div>
              <div className="item-2">
                Introduccion a la sintaxis del lenguaje: <br/> Variables, Tipos de Datos (Core data types)
              </div>
            </div>
            <div className="dayOne">
              <div className="item-2">Operadores, Expresiones, I/O</div>
              <div className="item-2 highlights">Programacion estructurada: <br/>Condicionales, Bucles, Iteradores</div>
              <div className="item-1">Introduccion a las estructuras de datos: <br/>Listas, Tuplas, Diccionarios</div>
              <div className="item-1">Operaciones con estructuras de datos, compresiones, generadores, itertools</div>
            </div>
          <div className="week-days">
            
            <div className="dayOne">
              <div className="item-3 highlights"> Estructuras de datos avanzadas: <br/>Pilas, Colas, Listas, Arboles, etc</div>
              <div className="item-3">Algoritmos utiles con estructuras de datos</div>
            </div>
            <div className="dayOne">
              <div className="item-4">Algoritmos Utiles: <br/>Busqueda, Ordenamiento, Grafos, etc</div>
              <div className="item-1">Principios de diseño de algoritmos</div>
              <div className="item-1 highlights">Analisis de complejidad Algoritmica</div>
            </div>
          </div>
          <div className="week-days">
            
            <div className="dayOne">
              <div className="item-2">Programacion modular: <br/>Funciones, Argumentos, Paquetes, Scopes</div>
              <div className="item-1">La biblioteca estandar de Python</div>
              <div className="item-1">Entornos Virtuales, PIP y Bibliotecas de terceros</div>
              <div className="item-2">Programacion Funcional: <br/>Calculo Lambda, Funciones de Orden Superior, Transparencia Referencial, etc</div>
            </div>
            <div className="dayOne">
              <div className="item-2">Introduccion a la Programacion Orientada a Objetos: <br/>Clases, Herencia, Encapsulamiento, Polimorfismo, Asociaciones, etc</div>
              <div className="item-2">Patrones de diseño: <br/>Factory, Builder, Adapter, Facade, Strategy, Observer</div>
              <div className="item-2">Buenas practicas de programacion: <br/> Principios SOLID / KISS / DRY, Antipatrones</div>
            </div>
          </div>
          <div className="week-days">
            
            <div className="dayOne">
              <div className="item-2">Metaprogramación <br/> Decorators, Metodos Magicos, Metaclases, Generacion de codigo al vuelo, etc</div>
              <div className="item-2">Concurrencia: <br/>GIL, Hilos, Subprocesos, Señales, etc</div>
              <div className="item-2">Programacion Reactiva: <br/> Observers, AsyncIO, RxPy, etc</div>
            </div>
            <div className="dayOne">
              <div className="item-2">Testing: <br/>Test unitarios, Fixtures, Github CI, Coverage</div>
              <div className="item-2">Programacion Defensiva: <br/>Manejo de errores, Tipado, Analisis de Codigo Estatico, DocStrings, etc</div>
              <div className="item-2">Protocolo HTTP, Sockets y Python para internet</div>
            </div>
          </div>
        </article>
      </aside>
    </section>
  );
}
