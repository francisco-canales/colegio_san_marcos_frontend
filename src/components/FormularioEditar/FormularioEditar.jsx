import { useState, useEffect } from 'react';
import { actualizarAlumno } from '../../services/alumnosService';
import { manejarError } from '../../utils/manejarError';
import styles from './FormularioEditar.module.css';

const validarCampos = (campos) => {
  const errores = {};
  if (campos.nombre.trim().length < 2) {
    errores.nombre = 'El nombre debe tener al menos 2 caracteres.';
  }
  if (campos.apellido.trim().length < 2) {
    errores.apellido = 'El apellido debe tener al menos 2 caracteres.';
  }
  if (campos.grado === '') {
    errores.grado = 'Debes seleccionar un grado.';
  }
  if (campos.seccion === '') {
    errores.seccion = 'Debes seleccionar una seccion.';
  }
  return errores;
};

function FormularioEditar({ alumnoEditar, onGuardado, onCancelar }) {
  const [campos, setCampos] = useState({
    nombre: '',
    apellido: '',
    grado: '',
    seccion: '',
  });
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [errorServidor, setErrorServidor] = useState(null);

  useEffect(() => {
    setCampos({
      nombre: alumnoEditar.nombre,
      apellido: alumnoEditar.apellido,
      grado: alumnoEditar.grado,
      seccion: alumnoEditar.seccion,
    });
    setErrores({});
    setErrorServidor(null);
  }, [alumnoEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCampos((anterior) => ({ ...anterior, [name]: value }));
    if (errores[name]) {
      setErrores((anterior) => ({ ...anterior, [name]: null }));
    }
  };

  const handleGuardar = async () => {
    const erroresEncontrados = validarCampos(campos);
    if (Object.keys(erroresEncontrados).length > 0) {
      setErrores(erroresEncontrados);
      return;
    }

    try {
      setEnviando(true);
      setErrorServidor(null);
      await actualizarAlumno(alumnoEditar.id, campos);
      onGuardado();
    } catch (err) {
      setErrorServidor(manejarError(err));
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className={styles.formulario}>
      <h2 className={styles.titulo}>Editar Alumno</h2>

      {errorServidor && <div className={`${styles.alerta} ${styles.alertaError}`}>{errorServidor}</div>}

      <form onSubmit={(e) => { e.preventDefault(); handleGuardar(); }}>
        <div className={styles.grupoFormulario}>
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            value={campos.nombre}
            onChange={handleChange}
            disabled={enviando}
            placeholder="Ej: Maria"
            className={styles.input}
          />
          {errores.nombre && <div className={`${styles.alerta} ${styles.alertaError}`}>{errores.nombre}</div>}
        </div>

        <div className={styles.grupoFormulario}>
          <label htmlFor="apellido">Apellido:</label>
          <input
            id="apellido"
            type="text"
            name="apellido"
            value={campos.apellido}
            onChange={handleChange}
            disabled={enviando}
            placeholder="Ej: Fernandez"
            className={styles.input}
          />
          {errores.apellido && <div className={`${styles.alerta} ${styles.alertaError}`}>{errores.apellido}</div>}
        </div>

        <div className={styles.grupoFormulario}>
          <label htmlFor="grado">Grado:</label>
          <select
            id="grado"
            name="grado"
            value={campos.grado}
            onChange={handleChange}
            disabled={enviando}
            className={styles.input}
          >
            <option value="">Selecciona un grado</option>
            <option value="7°">7°</option>
            <option value="8°">8°</option>
            <option value="9°">9°</option>
          </select>
          {errores.grado && <div className={`${styles.alerta} ${styles.alertaError}`}>{errores.grado}</div>}
        </div>

        <div className={styles.grupoFormulario}>
          <label htmlFor="seccion">Seccion:</label>
          <select
            id="seccion"
            name="seccion"
            value={campos.seccion}
            onChange={handleChange}
            disabled={enviando}
            className={styles.input}
          >
            <option value="">Selecciona una seccion</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
          {errores.seccion && <div className={`${styles.alerta} ${styles.alertaError}`}>{errores.seccion}</div>}
        </div>

        <div className={styles.botones}>
          <button type="submit" className={styles.btnPrimario} disabled={enviando}>
            {enviando ? 'Guardando...' : 'Actualizar alumno'}
          </button>
          <button type="button" className={styles.btnSecundario} onClick={onCancelar} disabled={enviando}>
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormularioEditar;
