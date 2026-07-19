import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Encabezado.module.css';

function Encabezado() {
  const { usuario, cerrarSesion } = useAuth();
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    cerrarSesion();
    navigate('/login');
  };

  return (
    <header className={styles.encabezado}>
      <div className={styles.contenido}>
        <div>
          <h1 className={styles.titulo}>Colegio San Marcos</h1>
          <p className={styles.subtitulo}>Sistema de Gestion Educativa</p>
        </div>
        {usuario && (
          <div className={styles.derecha}>
            <div className={styles.usuarioBadge}>
              <span className={styles.usuarioIcono}>👤</span>
              <span className={styles.usuarioTexto}>
                <strong>{usuario.nombre}</strong> ({usuario.rol})
              </span>
            </div>
            <button className={styles.btnCerrarSesion} onClick={handleCerrarSesion}>
              Cerrar sesion
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Encabezado;
