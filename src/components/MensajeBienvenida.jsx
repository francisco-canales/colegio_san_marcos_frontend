import { useState, useEffect } from 'react';

function MensajeBienvenida() {
  const [mensaje, setMensaje] = useState('Cargando...');

  useEffect(() => {
    console.log('useEffect se ejecutó');
    setMensaje('¡Bienvenido al sistema!');
  }, []);

  return (
    <div className="mensaje-bienvenida-ejemplo">
      <p>{mensaje}</p>
    </div>
  );
}

export default MensajeBienvenida;
