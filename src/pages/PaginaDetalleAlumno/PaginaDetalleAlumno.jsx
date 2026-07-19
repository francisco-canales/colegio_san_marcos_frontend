import { useParams, useNavigate } from 'react-router-dom';
import DetalleAlumno from '../../components/DetalleAlumno/DetalleAlumno';

function PaginaDetalleAlumno() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <DetalleAlumno idAlumno={Number(id)} onCerrar={() => navigate('/')} />
    </div>
  );
}

export default PaginaDetalleAlumno;
