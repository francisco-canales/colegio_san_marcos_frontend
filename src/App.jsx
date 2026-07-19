import { Routes, Route } from 'react-router-dom';
import Encabezado from './components/Encabezado/Encabezado';
import ProtegerRuta from './components/ProtegerRuta/ProtegerRuta';
import PaginaLogin from './pages/PaginaLogin/PaginaLogin';
import PaginaListaAlumnos from './pages/PaginaListaAlumnos/PaginaListaAlumnos';
import PaginaDetalleAlumno from './pages/PaginaDetalleAlumno/PaginaDetalleAlumno';
import PaginaCrearAlumno from './pages/PaginaCrearAlumno/PaginaCrearAlumno';
import PaginaEditarAlumno from './pages/PaginaEditarAlumno/PaginaEditarAlumno';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Encabezado />
      <main className={styles.contenido}>
        <Routes>
          <Route path="/login" element={<PaginaLogin />} />
          <Route path="/" element={<ProtegerRuta><PaginaListaAlumnos /></ProtegerRuta>} />
          <Route path="/alumnos/nuevo" element={<ProtegerRuta><PaginaCrearAlumno /></ProtegerRuta>} />
          <Route path="/alumnos/:id" element={<ProtegerRuta><PaginaDetalleAlumno /></ProtegerRuta>} />
          <Route path="/alumnos/:id/editar" element={<ProtegerRuta><PaginaEditarAlumno /></ProtegerRuta>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
