import { useNavigate } from 'react-router-dom';
import FormularioCrear from '../../components/FormularioCrear/FormularioCrear';

function PaginaCrearAlumno() {
  const navigate = useNavigate();

  return (
    <FormularioCrear
      onGuardado={() => navigate('/')}
      onCancelar={() => navigate('/')}
    />
  );
}

export default PaginaCrearAlumno;
