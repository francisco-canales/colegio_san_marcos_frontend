import { useState } from 'react';
import Encabezado from './components/Encabezado';
import ListaAlumnos from './components/ListaAlumnos';
import Contador from './components/Contador';
import FormularioAlumno from './components/FormularioAlumno';
import PieDePagina from './components/PieDePagina';
import CampoTexto from './components/CampoTexto';
import MensajeBienvenida from './components/MensajeBienvenida';
import SaludoPersonalizado from './components/SaludoPersonalizado';
import DetalleAlumno from './components/DetalleAlumno';
import './App.css';

function App() {
  const [idAlumnoSeleccionado, setIdAlumnoSeleccionado] = useState(null);

  const handleAlumnoGuardado = (nuevoAlumno) => {
    console.log('Nuevo alumno guardado:', nuevoAlumno);
  };

  return (
    <div className="app">
      <Encabezado usuarioActivo="Admin García" />

      <main className="contenido-principal">
        {idAlumnoSeleccionado && (
          <section className="seccion">
            <DetalleAlumno
              idAlumno={idAlumnoSeleccionado}
              onCerrar={() => setIdAlumnoSeleccionado(null)}
            />
          </section>
        )}

        <section className="seccion">
          <h2>Gestión de Alumnos</h2>
          <ListaAlumnos onSeleccionar={setIdAlumnoSeleccionado} />
        </section>

        <section className="seccion">
          <Contador />
        </section>

        <section className="seccion">
          <FormularioAlumno onAlumnoGuardado={handleAlumnoGuardado} />
        </section>

        <section className="seccion ejemplos-clase-4">
          <h2>Ejemplos de Clase vic. (Estado y useEffect)</h2>

          <div className="ejemplo-bloque">
            <h3>Campo de Texto Controlado</h3>
            <CampoTexto />
          </div>

          <div className="ejemplo-bloque">
            <h3>Mensaje de Bienvenida (Efecto al Montar)</h3>
            <MensajeBienvenida />
          </div>

          <div className="ejemplo-bloque">
            <h3>Saludo Personalizado (Efecto al Cambiar)</h3>
            <SaludoPersonalizado />
          </div>
        </section>
      </main>

      <PieDePagina anio={2026} empresa="Colegio San Marcos" />
    </div>
  );
}

export default App;

