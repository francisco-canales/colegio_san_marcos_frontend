/**
 * Componente ListaAlumnos
 * Ejemplo de composición de componentes y renderizado de listas
 * 
 * Conceptos demostrados:
 * - Composición: usando otros componentes dentro de este
 * - Array.map() para renderizar listas
 * - Prop 'key' requerida para listas (usa identificador único, no índice)
 * - Flujo de datos unidireccional: padre -> hijo
 */

import TarjetaAlumno from './TarjetaAlumno';

function ListaAlumnos() {
  // Datos de ejemplo (en una aplicación real, vendrían de una API o estado)
  const alumnos = [
    {
      id: 1,
      nombre: 'María Fernández García',
      grado: 9,
      seccion: 'A',
      correo: 'maria.fernandez@colegio.edu'
    },
    {
      id: 2,
      nombre: 'Carlos Hernández López',
      grado: 8,
      seccion: 'B',
      correo: 'carlos.hernandez@colegio.edu'
    },
    {
      id: 3,
      nombre: 'Ana López Martínez',
      grado: 9,
      seccion: 'A',
      correo: 'ana.lopez@colegio.edu'
    },
    {
      id: 4,
      nombre: 'Juan Rodríguez Pérez',
      grado: 10,
      seccion: 'C',
      correo: 'juan.rodriguez@colegio.edu'
    }
  ];

  return (
    <section className="lista-alumnos">
      <h2>Listado de Alumnos</h2>
      
      <div className="contenedor-tarjetas">
        {/* 
          Renderizado de lista con .map()
          IMPORTANTE: Cada elemento debe tener una prop 'key' única
          Usamos el 'id' del alumno, NO el índice (que es incorrecto)
        */}
        {alumnos.map((alumno) => (
          <TarjetaAlumno
            key={alumno.id}
            nombre={alumno.nombre}
            grado={alumno.grado}
            seccion={alumno.seccion}
            correo={alumno.correo}
          />
        ))}
      </div>
    </section>
  );
}

export default ListaAlumnos;
