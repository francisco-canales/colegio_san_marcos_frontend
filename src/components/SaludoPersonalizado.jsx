import { useState, useEffect } from 'react';

function SaludoPersonalizado() {
  const [nombre, setNombre] = useState('');
  const [saludo, setSaludo] = useState('');

  useEffect(() => {
    if (nombre.trim() === '') {
      setSaludo('');
      return;
    }
    console.log(`useEffect se ejecutó porque "nombre" cambió a: ${nombre}`);
    setSaludo(`Hola, ${nombre}. El efecto se ejecutó al detectar tu nombre.`);
  }, [nombre]);

  return (
    <div className="saludo-personalizado-ejemplo">
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Escribe tu nombre..."
        className="input"
      />
      {saludo && <p>{saludo}</p>}
    </div>
  );
}

export default SaludoPersonalizado;
