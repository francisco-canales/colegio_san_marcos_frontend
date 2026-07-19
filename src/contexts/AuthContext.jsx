import { createContext, useContext, useState, useEffect } from 'react';
import * as authService from '../services/authService';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  useEffect(() => {
    if (!token) {
      setCargando(false);
      return;
    }

    authService.obtenerPerfil()
      .then((datos) => setUsuario(datos))
      .catch(() => {
        setToken(null);
        setUsuario(null);
      })
      .finally(() => setCargando(false));
  }, [token]);

  const iniciarSesion = async (email, password) => {
    const respuesta = await authService.login(email, password);
    setToken(respuesta.token);
    setUsuario(respuesta.usuario);
    return respuesta;
  };

  const registrar = async (nombre, email, password) => {
    const respuesta = await authService.registrar(nombre, email, password);
    return respuesta;
  };

  const cerrarSesion = () => {
    setToken(null);
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, token, cargando, iniciarSesion, registrar, cerrarSesion }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const contexto = useContext(AuthContext);
  if (!contexto) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return contexto;
}
