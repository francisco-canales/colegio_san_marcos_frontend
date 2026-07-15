import { useState } from 'react';
import { crearAlumno } from '../services/alumnosService';
import { manejarError } from '../utils/manejarError';

const estadoInicial = {
  nombre: '',
  apellido: '',
  grado: '',
  seccion: '',
};

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
    errores.seccion = 'Debes seleccionar una sección.';
  }
  return errores;
};

function FormularioCrear({ onGuardado, onCancelar }) {
  const [campos, setCampos] = useState(estadoInicial);
  const [errores, setErrores] = useState({});
  const [enviando, setEnviando] = useState(false);
  const [errorServidor, setErrorServidor] = useState(null);

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
      await crearAlumno(campos);
      onGuardado();
    } catch (err) {
      setErrorServidor(manejarError(err));
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="formulario-alumno">
      <h2>Registrar Nuevo Alumno</h2>

      {errorServidor && <div className="alerta alerta-error">{errorServidor}</div>}

      <form className="formulario" onSubmit={(e) => { e.preventDefault(); handleGuardar(); }}>
        <div className="grupo-formulario">
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            value={campos.nombre}
            onChange={handleChange}
            disabled={enviando}
            placeholder="Ej: María"
            className="input"
          />
          {errores.nombre && <div className="alerta alerta-error">{errores.nombre}</div>}
        </div>

        <div className="grupo-formulario">
          <label htmlFor="apellido">Apellido:</label>
          <input
            id="apellido"
            type="text"
            name="apellido"
            value={campos.apellido}
            onChange={handleChange}
            disabled={enviando}
            placeholder="Ej: Fernández"
            className="input"
          />
          {errores.apellido && <div className="alerta alerta-error">{errores.apellido}</div>}
        </div>

        <div className="grupo-formulario">
          <label htmlFor="grado">Grado:</label>
          <select
            id="grado"
            name="grado"
            value={campos.grado}
            onChange={handleChange}
            disabled={enviando}
            className="input"
          >
            <option value="">Selecciona un grado</option>
            <option value="7°">7°</option>
            <option value="8°">8°</option>
            <option value="9°">9°</option>
          </select>
          {errores.grado && <div className="alerta alerta-error">{errores.grado}</div>}
        </div>

        <div className="grupo-formulario">
          <label htmlFor="seccion">Sección:</label>
          <select
            id="seccion"
            name="seccion"
            value={campos.seccion}
            onChange={handleChange}
            disabled={enviando}
            className="input"
          >
            <option value="">Selecciona una sección</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
          {errores.seccion && <div className="alerta alerta-error">{errores.seccion}</div>}
        </div>

        <div className="botones">
          <button type="submit" className="btn btn-primario" disabled={enviando}>
            {enviando ? 'Guardando...' : 'Registrar alumno'}
          </button>
          <button type="button" className="btn" onClick={onCancelar} disabled={enviando}>
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormularioCrear;
