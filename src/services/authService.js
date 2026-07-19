import { api } from '../api/axiosConfig';

export const login = async (email, password) => {
  const respuesta = await api.post('/auth/login', { email, password });
  return respuesta.data;
};

export const registrar = async (nombre, email, password) => {
  const respuesta = await api.post('/auth/registrar', { nombre, email, password });
  return respuesta.data;
};

export const obtenerPerfil = async () => {
  const respuesta = await api.get('/auth/perfil');
  return respuesta.data;
};
