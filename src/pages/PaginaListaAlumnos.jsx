import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListaAlumnos from '../components/ListaAlumnos';

function PaginaListaAlumnos() {
  const [recargar] = useState(0);

  return (
    <section className="seccion">
      <Link to="/alumnos/nuevo" className="btn btn-primario">
        + Registrar nuevo alumno
      </Link>
      <ListaAlumnos recargar={recargar} />
    </section>
  );
}

export default PaginaListaAlumnos;
