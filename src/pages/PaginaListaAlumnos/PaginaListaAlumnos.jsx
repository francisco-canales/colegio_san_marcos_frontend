import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListaAlumnos from '../../components/ListaAlumnos/ListaAlumnos';

function PaginaListaAlumnos() {
  const [recargar] = useState(0);

  return (
    <div>
      <Link to="/alumnos/nuevo" className="btn btn-primario">
        + Registrar nuevo alumno
      </Link>
      <ListaAlumnos recargar={recargar} />
    </div>
  );
}

export default PaginaListaAlumnos;
