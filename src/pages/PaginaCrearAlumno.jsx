import { useNavigate } from 'react-router-dom';
import FormularioCrear from '../components/FormularioCrear';

function PaginaCrearAlumno() {
  const navigate = useNavigate();

  return (
    <section className="seccion">
      <FormularioCrear
        onGuardado={() => navigate('/')}
        onCancelar={() => navigate('/')}
      />
    </section>
  );
}

export default PaginaCrearAlumno;
