import "./our-story.css";
import Navbar from "./navbar"

function OurStory({setView}) {
  return (
    <>
      <Navbar setView={setView}/>
      <div className="our-story">
        <main>
          <h1>Nuestra Historia</h1>
          <p>
            María inició su aventura por el sueño americano, con la venta de tamales
            en la calle 4, podría decirse que muchos de sus clientes no saben su nombre,
            pero conocen el sabor inigualable de su comida, Ella es reconocida como la
            señora del carrito de tamales de la calle 4, o la señora que vendía Tamales a
            fuera de la Northgate.
          </p>
          <p>
            Siempre de trato amable y bromista, todos los días recorría los comercios
            de la calle 4 para vender sus tamales y champurrado, y por la tarde lo hacia
            en esquina de  Northgate.
          </p>
          <p>
            María siempre ha tenido el apoyo de su esposo, porque su objetivo al venir
            a USA fue darle estudios a sus hijos y que tuvieran una mejor calidad de
            vida, lo cual consiguieron exitosamente, y ese siempre ha sido su mayor
            orgullo.
          </p>
          <p>
            Hubo tiempos difíciles, como la crisis financiera del 2008, lo que
            repercutió en que su venta de tamales ya no era un negocio viable y aunado
            a esto perdió  su casa, lo cual la  lleno de profunda tristeza, sin embargo
            supo reinventarse e inició a vender comida casera en todos los comercios
            de la calle 4, y solo hacía tamales bajo pedido.
          </p>
          <p>
            En el 2013 teniendo algunos ahorros, decidió con ayuda de su esposo abrir
            La Fonda, un restaurante de antojitos mexicanos que se encontraba al lado
            del Consulado Mexicano, su especialidad de los domingos era el bolillo con
            relleno y el chilate,  muy pronto fue un éxito con sus paisanos de Guerrero.
            Lamentablente el negocio no prosperó ya que el consulado fue cambiado de lugar
            y esa era la principal fuente de clientes del negocio.
          </p>
          <p>
            María tuvo que  regresar con su carrito de comida a la calle 4, y ahora
            no sólo hacia tamales bajo pedido, también agregó  chilate y el relleno
            de puerco estilo Guerrero.
          </p>
          <p>
            En el 2017 un amigo le hace la invitación para hacerse socios, ese año
            nace Chevita's  Juice and bagels," el nombre se deriva por una broma del
            pueblo de María, y como la usaba tanto terminó siendo su apodo, ya no le
            decían Mary, la conocían como Cheva o Chevitas.
          </p>
          <p>
            Chevita's Juice and Bagels ha enfrentado muchas batallas, pero María o
            Chevita como ya la conocen muchos, día a día  se levanta con mucha energia
            para salir adelante.
          </p>
          <p>
            Actualmente Chevita's Juice and Bagels solo es manejado por María.
          </p>
        </main>
      </div>
    </>
  )
}

export default OurStory
