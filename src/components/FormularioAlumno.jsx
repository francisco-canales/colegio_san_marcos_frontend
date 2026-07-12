/**
 
 */

import { useState } from 'react';

function FormularioAlumno({ onAlumnoGuardado }) {
  // Estado para cada campo del formulario
  const [nombre, setNombre] = useState('');
  const [grado, setGrado] = useState('');
  const [seccion, setSeccion] = useState('A');
  const [correo, setCorreo] = useState('');
  const [error, setError] = useState('');
  const [exito, setExito] = useState(false);

  // Manejador para cambios en los inputs
  const manejarCambioNombre = (e) => {
    setNombre(e.target.value);
    setError(''); // Limpia errores previos mientras escribe
  };

  const manejarCambioGrado = (e) => {
    setGrado(e.target.value);
    setError('');
  };

  const manejarCambioCorreo = (e) => {
    setCorreo(e.target.value);
    setError('');
  };

  // Manejador del envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault(); // Previene el recargo de página

    // Validación simple
    if (!nombre || !grado || !correo) {
      setError('Por favor completa todos los campos');
      setExito(false);
      return;
    }

    // Validación de correo (muy básica)
    if (!correo.includes('@')) {
      setError('Por favor ingresa un correo válido');
      setExito(false);
      return;
    }

    // Si la validación pasó, crear objeto con datos
    const nuevoAlumno = { nombre, grado, seccion, correo };

    // Llamar a función del padre si existe
    if (onAlumnoGuardado) {
      onAlumnoGuardado(nuevoAlumno);
    }

    // Mostrar éxito y limpiar formulario
    setExito(true);
    setNombre('');
    setGrado('');
    setSeccion('A');
    setCorreo('');

    // Ocultar mensaje de éxito después de 3 segundos
    setTimeout(() => setExito(false), 3000);
  };

  return (
    <section className="formulario-alumno">
      <h2>Registrar Nuevo Alumno</h2>

      {/* Mostrar mensajes de error o éxito */}
      {error && <div className="alerta alerta-error">{error}</div>}
      {exito && (
        <div className="alerta alerta-exito">
          ✓ Alumno registrado exitosamente
        </div>
      )}

      <form onSubmit={manejarEnvio} className="formulario">
        <div className="grupo-formulario">
          <label htmlFor="nombre">Nombre del Alumno:</label>
          <input
            id="nombre"
            type="text"
            placeholder="Ej: María Fernández"
            value={nombre}
            onChange={manejarCambioNombre}
            className="input"
          />
        </div>

        <div className="grupo-formulario">
          <label htmlFor="grado">Grado:</label>
          <input
            id="grado"
            type="number"
            placeholder="Ej: 9"
            value={grado}
            onChange={manejarCambioGrado}
            className="input"
            min="1"
            max="12"
          />
        </div>

        <div className="grupo-formulario">
          <label htmlFor="seccion">Sección:</label>
          <select
            id="seccion"
            value={seccion}
            onChange={(e) => setSeccion(e.target.value)}
            className="input"
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>

        <div className="grupo-formulario">
          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            id="correo"
            type="email"
            placeholder="Ej: alumno@colegio.edu"
            value={correo}
            onChange={manejarCambioCorreo}
            className="input"
          />
        </div>

        <button type="submit" className="btn btn-primario">
          Guardar Alumno
        </button>
      </form>
    </section>
  );
}

export default FormularioAlumno;
