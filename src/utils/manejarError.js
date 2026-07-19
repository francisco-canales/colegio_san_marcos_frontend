export const manejarError = (error) => {
  if (!error.response) {
    return 'No se pudo conectar con el servidor. Verifica tu conexión.';
  }

  const { status, data } = error.response;

  const mensaje = data?.error || data?.message;

  switch (status) {
    case 400:
      return mensaje || 'Los datos enviados no son válidos.';
    case 401:
      return mensaje || 'Tu sesión ha expirado. Por favor, vuelve a iniciar sesión.';
    case 403:
      return mensaje || 'No tienes permisos para realizar esta acción.';
    case 404:
      return mensaje || 'El recurso solicitado no fue encontrado.';
    case 500:
      return mensaje || 'Ocurrió un error en el servidor. Intenta de nuevo más tarde.';
    default:
      return mensaje || 'Ocurrió un error inesperado.';
  }
};
