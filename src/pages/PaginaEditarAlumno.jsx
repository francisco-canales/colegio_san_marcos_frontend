import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FormularioEditar from '../components/FormularioEditar';
import { obtenerAlumnoPorId } from '../services/alumnosService';
import { manejarError } from '../utils/manejarError';

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

  if (cargando) return <p className="cargando-texto">Cargando datos del alumno...</p>;

  if (error) {
    return (
      <section className="seccion">
        <div className="alerta alerta-error">{error}</div>
        <button onClick={() => navigate('/')} className="btn" style={{ marginTop: '0.5rem' }}>
          Volver al listado
        </button>
      </section>
    );
  }

  return (
    <section className="seccion">
      <FormularioEditar
        alumnoEditar={alumno}
        onGuardado={() => navigate('/')}
        onCancelar={() => navigate('/')}
      />
    </section>
  );
}

export default PaginaEditarAlumno;
