import { useState } from 'react';
import Encabezado from './components/Encabezado';
import ListaAlumnos from './components/ListaAlumnos';
import DetalleAlumno from './components/DetalleAlumno';
import FormularioCrear from './components/FormularioCrear';
import FormularioEditar from './components/FormularioEditar';
import './App.css';

function App() {
  const [idAlumnoSeleccionado, setIdAlumnoSeleccionado] = useState(null);
  const [alumnoEditar, setAlumnoEditar] = useState(null);
  const [mostrarCrear, setMostrarCrear] = useState(false);
  const [recargar, setRecargar] = useState(0);

  const handleGuardado = () => {
    setMostrarCrear(false);
    setAlumnoEditar(null);
    setRecargar((anterior) => anterior + 1);
  };

  const handleEditar = (alumno) => {
    setAlumnoEditar(alumno);
    setMostrarCrear(false);
    setIdAlumnoSeleccionado(null);
  };

  const handleNuevo = () => {
    setAlumnoEditar(null);
    setMostrarCrear(true);
    setIdAlumnoSeleccionado(null);
  };

  const handleCancelar = () => {
    setMostrarCrear(false);
    setAlumnoEditar(null);
  };

  const mostrarFormulario = mostrarCrear || alumnoEditar !== null;

  return (
    <div className="app">
      <Encabezado usuarioActivo="Vic Flores" />

      <main className="contenido-principal">
        {!mostrarFormulario && (
          <section className="seccion">
            <button className="btn btn-primario" onClick={handleNuevo}>
              + Registrar nuevo alumno
            </button>
          </section>
        )}

        {mostrarCrear && (
          <section className="seccion">
            <FormularioCrear
              onGuardado={handleGuardado}
              onCancelar={handleCancelar}
            />
          </section>
        )}

        {alumnoEditar && (
          <section className="seccion">
            <FormularioEditar
              alumnoEditar={alumnoEditar}
              onGuardado={handleGuardado}
              onCancelar={handleCancelar}
            />
          </section>
        )}

        {!mostrarFormulario && (
          <section className="seccion">
            <ListaAlumnos
              onSeleccionar={setIdAlumnoSeleccionado}
              onEditar={handleEditar}
              recargar={recargar}
            />
          </section>
        )}

        {idAlumnoSeleccionado && !mostrarFormulario && (
          <section className="seccion">
            <DetalleAlumno
              idAlumno={idAlumnoSeleccionado}
              onCerrar={() => setIdAlumnoSeleccionado(null)}
            />
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
