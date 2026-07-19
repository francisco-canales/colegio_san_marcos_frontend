import { useState } from 'react';
import styles from './TarjetaAlumno.module.css';

function TarjetaAlumno({ id, nombre, apellido, grado, seccion, correo, onSeleccionar, onEditar }) {
  const [matriculaActiva, setMatriculaActiva] = useState(true);

  const toggleMatricula = () => {
    setMatriculaActiva((anterior) => !anterior);
  };

  const info = `${grado} - Seccion ${seccion}`;

  return (
    <div className={`${styles.tarjeta} ${matriculaActiva ? styles.estadoActivo : styles.estadoInactivo}`}>
      <div className={styles.contenido}>
        <h2 className={styles.nombre}>{nombre} {apellido}</h2>
        <p className={styles.info}>
          <strong>Grado:</strong> {info}
        </p>
        {correo && <p className={styles.correo}>📧 {correo}</p>}
        <p className={styles.estadoMatricula}>
          Matricula:{' '}
          <span className={matriculaActiva ? styles.badgeActivo : styles.badgeInactivo}>
            {matriculaActiva ? 'Activa' : 'Inactiva'}
          </span>
        </p>
      </div>
      <div className={styles.acciones}>
        <button
          onClick={toggleMatricula}
          className={`${styles.btnToggle} ${matriculaActiva ? styles.btnDesactivar : styles.btnActivar}`}
        >
          {matriculaActiva ? 'Desactivar matricula' : 'Activar matricula'}
        </button>
        {onSeleccionar && (
          <button
            onClick={() => onSeleccionar(id)}
            className={styles.btnAccion}
          >
            Ver detalle
          </button>
        )}
        {onEditar && (
          <button
            onClick={() => onEditar({ id, nombre, apellido, grado, seccion })}
            className={styles.btnAccion}
          >
            Editar
          </button>
        )}
      </div>
    </div>
  );
}

export default TarjetaAlumno;
