import { useState, useEffect } from 'react';
import TarjetaAlumno from './TarjetaAlumno';
import { obtenerAlumnos } from '../services/alumnosService';
import { manejarError } from '../utils/manejarError';

const ELEMENTOS_POR_PAGINA = 8;

function ListaAlumnos({ onSeleccionar, onEditar, recargar }) {
  const [alumnos, setAlumnos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [gradoFiltro, setGradoFiltro] = useState('Todos');
  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    let cancelado = false;
    const cargarAlumnos = async () => {
      try {
        setCargando(true);
        setError(null);
        const datos = await obtenerAlumnos();
        if (!cancelado) {
          setAlumnos(datos);
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
    cargarAlumnos();
    return () => {
      cancelado = true;
    };
  }, [recargar]);

  useEffect(() => {
    setPaginaActual(1);
  }, [busqueda, gradoFiltro]);

  const alumnosFiltrados = alumnos.filter((alumno) => {
    const coincideNombre = `${alumno.nombre} ${alumno.apellido}`
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideGrado =
      gradoFiltro === 'Todos' || alumno.grado === gradoFiltro;
    return coincideNombre && coincideGrado;
  });

  const totalPaginas = Math.ceil(alumnosFiltrados.length / ELEMENTOS_POR_PAGINA);
  const indiceInicio = (paginaActual - 1) * ELEMENTOS_POR_PAGINA;
  const indiceFin = indiceInicio + ELEMENTOS_POR_PAGINA;
  const alumnosPagina = alumnosFiltrados.slice(indiceInicio, indiceFin);

  if (cargando) {
    return (
      <section className="lista-alumnos loading-container">
        <h2>Listado de Alumnos</h2>
        <div className="cargando-spinner-box">
          <div className="spinner"></div>
          <p className="cargando-texto">Cargando listado de alumnos...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="lista-alumnos error-container">
        <h2>Listado de Alumnos</h2>
        <div className="alerta alerta-error">
          <span className="error-icono">⚠️</span>
          <span>{error}</span>
        </div>
      </section>
    );
  }

  return (
    <section className="lista-alumnos">
      <h2>Listado de Alumnos</h2>

      <div className="filtros-seccion">
        <div className="filtros-control">
          <span className="filtro-icono">🔍</span>
          <input
            type="text"
            placeholder="Buscar por nombre o apellido..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="input input-busqueda"
          />
        </div>

        <div className="filtros-control">
          <span className="filtro-icono">🎓</span>
          <select
            value={gradoFiltro}
            onChange={(e) => setGradoFiltro(e.target.value)}
            className="input select-filtro"
          >
            <option value="Todos">Todos los grados</option>
            <option value="7°">7°</option>
            <option value="8°">8°</option>
            <option value="9°">9°</option>
          </select>
        </div>
      </div>

      <div className="resultados-info">
        <p>
          Mostrando{' '}
          <strong>{alumnosPagina.length}</strong> de{' '}
          <strong>{alumnosFiltrados.length}</strong> alumnos
          {gradoFiltro !== 'Todos' || busqueda !== ''
            ? ' (filtrados)'
            : ` — Total: ${alumnos.length}`}
        </p>
      </div>

      {alumnos.length === 0 ? (
        <div className="alumnos-vacio">
          <span className="vacio-icono">📭</span>
          <p>No hay alumnos registrados en el sistema.</p>
        </div>
      ) : alumnosFiltrados.length === 0 ? (
        <div className="alumnos-vacio">
          <span className="vacio-icono">📭</span>
          <p>No se encontraron alumnos con los filtros aplicados.</p>
        </div>
      ) : (
        <div className="contenedor-tarjetas">
          {alumnosPagina.map((alumno) => (
            <TarjetaAlumno
              key={alumno.id}
              id={alumno.id}
              nombre={alumno.nombre}
              apellido={alumno.apellido}
              grado={alumno.grado}
              seccion={alumno.seccion}
              correo={alumno.correo}
              onSeleccionar={onSeleccionar}
              onEditar={onEditar}
            />
          ))}
        </div>
      )}

      {totalPaginas > 1 && (
        <div className="botones" style={{ marginTop: '1rem', justifyContent: 'center' }}>
          <button
            className="btn"
            onClick={() => setPaginaActual((anterior) => anterior - 1)}
            disabled={paginaActual === 1}
          >
            Anterior
          </button>
          {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((pagina) => (
            <button
              key={pagina}
              className="btn"
              onClick={() => setPaginaActual(pagina)}
              disabled={pagina === paginaActual}
            >
              {pagina}
            </button>
          ))}
          <button
            className="btn"
            onClick={() => setPaginaActual((anterior) => anterior + 1)}
            disabled={paginaActual === totalPaginas}
          >
            Siguiente
          </button>
        </div>
      )}
    </section>
  );
}

export default ListaAlumnos;
