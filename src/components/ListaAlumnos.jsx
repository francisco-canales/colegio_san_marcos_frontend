
import { useState, useEffect } from 'react';
import TarjetaAlumno from './TarjetaAlumno';
import { alumnosSimulados } from '../datos/alumnos';

function ListaAlumnos() {
  const [alumnos, setAlumnos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [gradoFiltro, setGradoFiltro] = useState('Todos');

  useEffect(() => {
    setCargando(true);
    setError(false);
    const temporizador = setTimeout(() => {
      try {
        setAlumnos(alumnosSimulados);
        setCargando(false);
      } catch {
        setError(true);
        setCargando(false);
      }
    }, 1200);

    return () => {
      clearTimeout(temporizador);
      console.log('ListaAlumnos: carga cancelada o componente desmontado');
    };
  }, []);

  const alumnosFiltrados = alumnos.filter((alumno) => {
    const coincideNombre = alumno.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideGrado =
      gradoFiltro === 'Todos' || alumno.grado === gradoFiltro;
    return coincideNombre && coincideGrado;
  });

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
          <span>Ocurrió un error al cargar los alumnos. Intenta recargar la página.</span>
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
            placeholder="Buscar alumno por nombre..."
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
          Mostrando <strong>{alumnosFiltrados.length}</strong> de{' '}
          <strong>{alumnos.length}</strong> alumnos
        </p>
      </div>

      {alumnosFiltrados.length === 0 ? (
        <div className="alumnos-vacio">
          <span className="vacio-icono">📭</span>
          <p>No se encontraron alumnos con los filtros aplicados.</p>
        </div>
      ) : (
        <div className="contenedor-tarjetas">
          {alumnosFiltrados.map((alumno) => (
            <TarjetaAlumno
              key={alumno.id}
              nombre={alumno.nombre}
              grado={alumno.grado}
              seccion={alumno.seccion}
              correo={alumno.correo}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ListaAlumnos;
