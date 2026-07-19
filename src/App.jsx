import { Routes, Route } from 'react-router-dom';
import Encabezado from './components/Encabezado';
import PaginaListaAlumnos from './pages/PaginaListaAlumnos';
import PaginaDetalleAlumno from './pages/PaginaDetalleAlumno';
import PaginaCrearAlumno from './pages/PaginaCrearAlumno';
import PaginaEditarAlumno from './pages/PaginaEditarAlumno';
import './App.css';

function App() {
  return (
    <div className="app">
      <Encabezado usuarioActivo="Vic Flores" />
      <main className="contenido-principal">
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
