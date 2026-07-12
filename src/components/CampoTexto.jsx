import { useState } from 'react';

function CampoTexto() {
  const [texto, setTexto] = useState('');

  return (
    <div className="campo-texto-ejemplo">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe algo..."
        className="input"
      />
      <p>Caracteres escritos: <strong>{texto.length}</strong></p>
      <p>Lo que escribiste: <strong>{texto || '(vacío)'}</strong></p>
      <button onClick={() => setTexto('')} className="btn">Limpiar</button>
    </div>
  );
}

export default CampoTexto;
