import { useParams, useNavigate } from 'react-router-dom';
import DetalleAlumno from '../components/DetalleAlumno';

function PaginaDetalleAlumno() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <section className="seccion">
      <DetalleAlumno idAlumno={Number(id)} onCerrar={() => navigate('/')} />
    </section>
  );
}

export default PaginaDetalleAlumno;
