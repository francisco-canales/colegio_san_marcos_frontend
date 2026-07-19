import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { manejarError } from '../../utils/manejarError';
import styles from './PaginaLogin.module.css';

function PaginaLogin() {
  const { iniciarSesion } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setEnviando(true);

    try {
      await iniciarSesion(email, password);
      navigate('/');
    } catch (err) {
      setError(manejarError(err));
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div className={styles.pagina}>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <h1 className={styles.titulo}>Iniciar Sesion</h1>
        <p className={styles.subtitulo}>Colegio San Marcos</p>

        {error && <div className={styles.alertaError}>{error}</div>}

        <div className={styles.grupoFormulario}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className={styles.input}
            disabled={enviando}
            required
          />
        </div>

        <div className={styles.grupoFormulario}>
          <label htmlFor="password">Contrasena:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Minimo 8 caracteres"
            className={styles.input}
            disabled={enviando}
            required
          />
        </div>

        <button type="submit" className={styles.btnPrimario} disabled={enviando}>
          {enviando ? 'Ingresando...' : 'Ingresar'}
        </button>
      </form>
    </div>
  );
}

export default PaginaLogin;
