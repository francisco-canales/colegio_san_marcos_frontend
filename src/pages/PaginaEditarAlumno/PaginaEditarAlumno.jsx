import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FormularioEditar from '../../components/FormularioEditar/FormularioEditar';
import { obtenerAlumnoPorId } from '../../services/alumnosService';
import { manejarError } from '../../utils/manejarError';

function PaginaEditarAlumno() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [alumno, setAlumno] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelado = false;
    const cargarAlumno = async () => {
      try {
        setCargando(true);
        setError(null);
        const datos = await obtenerAlumnoPorId(Number(id));
        if (!cancelado) setAlumno(datos);
      } catch (err) {
        if (!cancelado) setError(manejarError(err));
      } finally {
        if (!cancelado) setCargando(false);
      }
    };
    cargarAlumno();
    return () => {
      cancelado = true;
    };
  }, [id]);

  if (cargando) return <p>Cargando datos del alumno...</p>;

  if (error) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => navigate('/')}>Volver al listado</button>
      </div>
    );
  }

  return (
    <FormularioEditar
      alumnoEditar={alumno}
      onGuardado={() => navigate('/')}
      onCancelar={() => navigate('/')}
    />
  );
}

export default PaginaEditarAlumno;
