import { useState, useEffect } from 'react';
import { obtenerAlumnoPorId } from '../services/alumnosService';

function DetalleAlumno({ idAlumno, onCerrar }) {
  const [alumno, setAlumno] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelado = false;
    const cargarDetalle = async () => {
      try {
        setCargando(true);
        setError(null);
        const datos = await obtenerAlumnoPorId(idAlumno);
        if (!cancelado) {
          setAlumno(datos);
        }
      } catch (err) {
        if (!cancelado) {
          setError(err.response?.data?.message || 'Error al cargar el detalle del alumno.');
        }
      } finally {
        if (!cancelado) {
          setCargando(false);
        }
      }
    };
    cargarDetalle();
    return () => {
      cancelado = true;
    };
  }, [idAlumno]);

  if (cargando) return <p className="cargando-texto">Cargando detalle del alumno...</p>;
  if (error) {
    return (
      <div className="detalle-error-box" style={{ border: '1px solid #990000', padding: '1rem', marginTop: '1rem' }}>
        <div className="alerta alerta-error" style={{ marginBottom: '0.5rem' }}>{error}</div>
        <button onClick={onCerrar} className="btn">Cerrar</button>
      </div>
    );
  }

  return (
    <div className="detalle-alumno-box" style={{ border: '1px solid #000000', padding: '1rem', marginTop: '1rem' }}>
      <h2>Detalle del Alumno</h2>
      <p><strong>Nombre:</strong> {alumno.nombre}</p>
      <p><strong>Grado:</strong> {alumno.grado} / Sección {alumno.seccion}</p>
      {alumno.correo && <p><strong>Correo:</strong> {alumno.correo}</p>}
      {alumno.duiResponsable && <p><strong>DUI del responsable:</strong> {alumno.duiResponsable}</p>}
      {alumno.estado && <p><strong>Estado de matrícula:</strong> {alumno.estado}</p>}
      <button onClick={onCerrar} className="btn" style={{ marginTop: '0.75rem' }}>Cerrar detalle</button>
    </div>
  );
}

export default DetalleAlumno;
