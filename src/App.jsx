
import Encabezado from './components/Encabezado';
import ListaAlumnos from './components/ListaAlumnos';
import Contador from './components/Contador';
import FormularioAlumno from './components/FormularioAlumno';
import PieDePagina from './components/PieDePagina';
import './App.css';

function App() {
  const handleAlumnoGuardado = (nuevoAlumno) => {
    console.log('Nuevo alumno guardado:', nuevoAlumno);
  };

  return (
    <div className="app">
      <Encabezado usuarioActivo="Admin García" />

      <main className="contenido-principal">
        <section className="seccion">
          <h2>Gestión de Alumnos</h2>
          <ListaAlumnos />
        </section>

        <section className="seccion">
          <Contador />
        </section>

        <section className="seccion">
          <FormularioAlumno onAlumnoGuardado={handleAlumnoGuardado} />
        </section>
      </main>

      <PieDePagina anio={2026} empresa="Colegio San Marcos" />
    </div>
  );
}

export default App;

