/**
 * Componente Encabezado
 * Ejemplo de componente funcional simple que retorna JSX
 * 
 * Conceptos demostrados:
 * - Componente funcional con nombre que empieza en mayúscula
 * - Retorna un único elemento raíz (div)
 * - Uso de etiquetas semánticas HTML (<header>)
 * - className en lugar de class (palabra reservada en JS)
 */

function Encabezado() {
  return (
    <header className="encabezado">
      <h1>Colegio San Marcos</h1>
      <p className="subtitulo">Sistema de Gestión Educativa</p>
    </header>
  );
}

export default Encabezado;
