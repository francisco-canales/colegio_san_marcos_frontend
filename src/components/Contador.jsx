/**
 * Componente Contador
 * Ejemplo de estado con hooks
 * 
 * Conceptos demostrados:
 * - Hook useState para manejar estado
 * - Estado local que persiste entre renderizados
 * - onClick con manejador de eventos (camelCase)
 * - Re-renderizado automático cuando el estado cambia
 * - Closure: la función setCount "recuerda" qué estado actualiza
 */

import { useState } from 'react';

function Contador() {
  // useState retorna [valorActual, función para actualizar]
  // El nombre 'count' y 'setCount' es una convención
  const [count, setCount] = useState(0);
  
  // Función manejadora del evento click
  // Usa función flecha para mantener el contexto 'this'
  const incrementar = () => {
    setCount(count + 1);
  };
  
  const decrementar = () => {
    setCount(count - 1);
  };
  
  const reiniciar = () => {
    setCount(0);
  };

  return (
    <section className="contador">
      <h2>Contador de Clics</h2>
      
      <div className="contador-display">
        {/* 
          Interpolación de variables en JSX con {}
          Cuando count cambia, React re-renderiza este componente
        */}
        <p className="numero">El contador está en: <span>{count}</span></p>
        <p className="mensaje">
          {count === 0 && "Haz clic para empezar"}
          {count > 0 && count < 10 && "¡Buen comienzo!"}
          {count >= 10 && count < 50 && "¡Vas muy bien!"}
          {count >= 50 && "¡¡¡Eres un campeón!!!"}
        </p>
      </div>

      <div className="botones">
        {/* onClick requiere una función, no una llamada a función */}
        <button onClick={decrementar} className="btn btn-secundario">
          -
        </button>
        <button onClick={incrementar} className="btn btn-primario">
          +
        </button>
        <button onClick={reiniciar} className="btn btn-peligro">
          Reiniciar
        </button>
      </div>

      {/* 
        Comentario en JSX: debe usar sintaxis especial
        Los comentarios tradicionales // no funcionan aquí
      */}
    </section>
  );
}

export default Contador;
