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

import { useState } from 'react';

function TarjetaAlumno({ nombre, grado, seccion, correo }) {
  const [matriculaActiva, setMatriculaActiva] = useState(true);
  
  const toggleMatricula = () => {
    setMatriculaActiva((anterior) => !anterior);
  };

  const info = `${grado} - Sección ${seccion}`;
  
  return (
    <div className={`tarjeta-alumno ${matriculaActiva ? 'estado-activa' : 'estado-inactiva'}`}>
      <div className="tarjeta-contenido">
        <h2>{nombre}</h2>
        <p className="grado-seccion">
          <strong>Grado:</strong> {info}
        </p>
        {correo && <p className="correo">📧 {correo}</p>}
        <p className="estado-matricula">
          Matrícula:{' '}
          <span className={`badge ${matriculaActiva ? 'badge-activa' : 'badge-inactiva'}`}>
            {matriculaActiva ? 'Activa' : 'Inactiva'}
          </span>
        </p>
      </div>
      <div className="tarjeta-acciones">
        <button 
          onClick={toggleMatricula} 
          className={`btn-toggle ${matriculaActiva ? 'btn-desactivar' : 'btn-activar'}`}
        >
          {matriculaActiva ? 'Desactivar matrícula' : 'Activar matrícula'}
        </button>
      </div>
    </div>
  );
}

export default TarjetaAlumno;
