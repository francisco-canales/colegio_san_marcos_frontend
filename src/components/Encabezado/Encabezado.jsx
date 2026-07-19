import styles from './Encabezado.module.css';

function Encabezado({ usuarioActivo }) {
  return (
    <header className={styles.encabezado}>
      <h1 className={styles.titulo}>Colegio San Marcos</h1>
      <p className={styles.subtitulo}>Sistema de Gestion Educativa</p>
      {usuarioActivo && (
        <div className={styles.usuarioBadge}>
          <span className={styles.usuarioIcono}>👤</span>
          <span className={styles.usuarioTexto}>
            Usuario activo: <strong>{usuarioActivo}</strong>
          </span>
        </div>
      )}
    </header>
  );
}

export default Encabezado;
