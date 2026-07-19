import { Routes, Route } from 'react-router-dom';
import Encabezado from './components/Encabezado/Encabezado';
import PaginaListaAlumnos from './pages/PaginaListaAlumnos/PaginaListaAlumnos';
import PaginaDetalleAlumno from './pages/PaginaDetalleAlumno/PaginaDetalleAlumno';
import PaginaCrearAlumno from './pages/PaginaCrearAlumno/PaginaCrearAlumno';
import PaginaEditarAlumno from './pages/PaginaEditarAlumno/PaginaEditarAlumno';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Encabezado usuarioActivo="Vic Flores" />
      <main className={styles.contenido}>
        <Routes>
          <Route path="/" element={<PaginaListaAlumnos />} />
          <Route path="/alumnos/nuevo" element={<PaginaCrearAlumno />} />
          <Route path="/alumnos/:id" element={<PaginaDetalleAlumno />} />
          <Route path="/alumnos/:id/editar" element={<PaginaEditarAlumno />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
