import { api } from '../api/axiosConfig';

export const obtenerAlumnos = async () => {
  const respuesta = await api.get('/alumnos');
  return respuesta.data;
};

export const obtenerAlumnoPorId = async (id) => {
  const respuesta = await api.get(`/alumnos/${id}`);
  return respuesta.data;
};

export const crearAlumno = async (datosAlumno) => {
  const respuesta = await api.post('/alumnos', datosAlumno);
  return respuesta.data;
};

export const actualizarAlumno = async (id, datosAlumno) => {
  const respuesta = await api.put(`/alumnos/${id}`, datosAlumno);
  return respuesta.data;
};

export const eliminarAlumno = async (id) => {
  const respuesta = await api.delete(`/alumnos/${id}`);
  return respuesta.data;
};
