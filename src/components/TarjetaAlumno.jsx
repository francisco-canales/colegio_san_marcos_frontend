/**
 * Componente TarjetaAlumno
 * Ejemplo de componente que recibe props
 * 
 * Conceptos demostrados:
 * - Props como argumentos de la función componente
 * - Destructuring de props en los parámetros
 * - Expresiones JS dentro de JSX usando {}
 * - Composición de componentes (reutilizable)
 */

function TarjetaAlumno({ nombre, grado, seccion, correo }) {
  // Lógica antes del return para mantener JSX limpio
  const info = `${grado}° - Sección ${seccion}`;
  
  return (
    <div className="tarjeta-alumno">
      <div className="tarjeta-contenido">
        <h2>{nombre}</h2>
        {/* Expresión condicional con operador ternario dentro de JSX */}
        <p className="grado-seccion">
          {grado ? `Grado: ${info}` : "Información no disponible"}
        </p>
        {/* Condicional con && para renderizar solo si existe */}
        {correo && <p className="correo">📧 {correo}</p>}
      </div>
      <button className="btn-ver-detalles">Ver detalles</button>
    </div>
  );
}

export default TarjetaAlumno;
