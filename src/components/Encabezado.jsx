/**

 */

function Encabezado({ usuarioActivo }) {
  return (
    <header className="encabezado">
      <h1>Colegio San Marcos</h1>
      <p className="subtitulo">Sistema de Gestión Educativa</p>
      {usuarioActivo && (
        <div className="usuario-badge">
          <span className="usuario-icono">👤</span>
          <span className="usuario-texto">
            Usuario activo: <strong>{usuarioActivo}</strong>
          </span>
        </div>
      )}
    </header>
  );
}

export default Encabezado;
