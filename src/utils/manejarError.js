export const manejarError = (error) => {
  if (!error.response) {
    return 'No se pudo conectar con el servidor. Verifica tu conexión.';
  }

  const { status, data } = error.response;

  switch (status) {
    case 400:
      return data?.message || 'Los datos enviados no son válidos.';
    case 401:
      return 'Tu sesión ha expirado. Por favor, vuelve a iniciar sesión.';
    case 403:
      return 'No tienes permisos para realizar esta acción.';
    case 404:
      return data?.message || 'El recurso solicitado no fue encontrado.';
    case 500:
      return 'Ocurrió un error en el servidor. Intenta de nuevo más tarde.';
    default:
      return data?.message || 'Ocurrió un error inesperado.';
  }
};
