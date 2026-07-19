import { useState, useEffect } from 'react';
import { obtenerAlumnoPorId } from '../../services/alumnosService';
import { manejarError } from '../../utils/manejarError';
import styles from './DetalleAlumno.module.css';

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
          setError(manejarError(err));
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

  if (cargando) return <p className={styles.cargando}>Cargando detalle del alumno...</p>;

  if (error) {
    return (
      <div className={styles.contenedor}>
        <div className={styles.error}>{error}</div>
        <button onClick={onCerrar} className={styles.btnCerrar}>Cerrar</button>
      </div>
    );
  }

  return (
    <div className={styles.contenedor}>
      <h2 className={styles.titulo}>Detalle del Alumno</h2>
      <p className={styles.campo}><strong>Nombre:</strong> {alumno.nombre} {alumno.apellido}</p>
      <p className={styles.campo}><strong>Grado:</strong> {alumno.grado} / Seccion {alumno.seccion}</p>
      {alumno.correo && <p className={styles.campo}><strong>Correo:</strong> {alumno.correo}</p>}
      {alumno.duiResponsable && <p className={styles.campo}><strong>DUI del responsable:</strong> {alumno.duiResponsable}</p>}
      {alumno.estado && <p className={styles.campo}><strong>Estado de matricula:</strong> {alumno.estado}</p>}
      <button onClick={onCerrar} className={styles.btnCerrar}>Cerrar detalle</button>
    </div>
  );
}

export default DetalleAlumno;
