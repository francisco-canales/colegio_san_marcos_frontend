# 🎓 Colegio San Marcos - Frontend

### Clase #2: JSX, Componentes Funcionales, Props y Hooks

**Aplicación educativa e interactiva que implementa todos los conceptos fundamentales de React**

---

## 📚 Contenido de la Clase

Este proyecto implementa completamente el material de **Clase #2 del Bootcamp de React**:

- ✅ **Extensión .jsx** - Por qué no es simplemente .js
- ✅ **¿Qué es JSX?** - Desmontando la sintaxis que parece HTML
- ✅ **Reglas Sintácticas de JSX** - Que debes internalizar
- ✅ **Componentes Funcionales** - La unidad fundamental de construcción
- ✅ **Props** - Cómo los componentes reciben información
- ✅ **Composición de Componentes** - Construyendo interfaces
- ✅ **Renderizado de Listas** - Con .map() y keys correctas
- ✅ **Hooks - useState** - El motor de interactividad
- ✅ **Flujo de Datos Unidireccional** - Cómo fluye la información
- ✅ **Responsabilidad Única** - El principio de diseño profesional

---

## 🚀 Quick Start

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
# Abre http://localhost:5173/
```

### Producción
```bash
npm run build
```

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Encabezado.jsx          → Componente simple
│   ├── TarjetaAlumno.jsx        → Props y destructuring
│   ├── ListaAlumnos.jsx         → Composición y .map()
│   ├── Contador.jsx             → Estado con hooks
│   ├── FormularioAlumno.jsx     → Formularios complejos
│   └── PieDePagina.jsx          → Fragments y props opcionales
├── App.jsx                       → Componente raíz
├── App.css                       → Estilos
├── index.css                     → Global styles
└── main.jsx                      → Punto de entrada

Documentación/
├── CLASE_2_CONCEPTOS.md          → Guía detallada de todos los conceptos
├── RESUMEN_IMPLEMENTACION.md    → Estructura y ejercicios
├── GUIA_RAPIDA.md               → Cheat sheet de referencia
├── CONCLUSION.md                → Resumen final
└── CHECKLIST.md                 → Lista de verificación
```

---

## 🧩 Componentes Implementados

### 1. Encabezado.jsx
**Componentes funcional simple que demuestra:**
- Sintaxis básica de componentes
- JSX y elemento raíz único
- Uso correcto de `className`

### 2. TarjetaAlumno.jsx
**Componente que recibe datos mediante props:**
- Props y destructuring
- Expresiones condicionales en JSX
- Lógica separada del markup

### 3. ListaAlumnos.jsx
**Composición y renderizado de listas:**
- Uso de `.map()` para iterar
- Prop `key` correctamente utilizada
- Reutilización de TarjetaAlumno

### 4. Contador.jsx
**Estado e interactividad con hooks:**
- Hook `useState`
- Manejadores de eventos
- Re-renderizado automático

### 5. FormularioAlumno.jsx
**Formularios complejos y validación:**
- Múltiples estados
- Inputs controlados
- Validación de datos
- Callbacks al padre

### 6. PieDePagina.jsx
**Props y Fragments:**
- Props con valores por defecto
- Fragment `<>...</>`
- Componente de presentación

### 7. App.jsx
**Composición jerárquica:**
- Orquestación de todos los componentes
- Sección educativa visual
- Responsabilidad única

---

## 📚 Documentación

### Para Principiantes
📖 Comienza con [GUIA_RAPIDA.md](GUIA_RAPIDA.md)
- Cheat sheet de sintaxis
- Ejemplos código a código
- Errores comunes

### Para Aprender a Fondo
📖 Lee [CLASE_2_CONCEPTOS.md](CLASE_2_CONCEPTOS.md)
- Explicación detallada de cada concepto
- Ejemplos prácticos
- Referencias a archivos del código

### Para Verificar tu Progreso
📖 Usa [CHECKLIST.md](CHECKLIST.md)
- Lista de verificación de conceptos
- Autoevaluación
- Próximos pasos

### Para Ver el Resumen
📖 Lee [CONCLUSION.md](CONCLUSION.md)
- Estadísticas del proyecto
- Lo que aprendiste
- Próxima clase

---

## 💡 Características

### Interactividad
- ✨ **Contador:** Incrementa, decrementa, reinicia
- ✨ **Lista de alumnos:** 4 alumnos con información completa
- ✨ **Formulario:** Validación y guardado de datos
- ✨ **Mensajes:** Éxito/error dinámicos

### Diseño
- 🎨 Paleta de colores moderna (morado/azul)
- 🎨 Gradientes elegantes
- 🎨 Animaciones suaves
- 🎨 Responsive (móvil, tablet, desktop)

### Educación
- 📚 8 tarjetas de conceptos visuales
- 📚 Código comentado y explicado
- 📚 Patrones profesionales
- 📚 Buenas prácticas implementadas

---

## 🎯 Conceptos Clave

### JSX
```jsx
// Componentes funcionales que retornan JSX
function Saludo() {
  return <h1>Hola Mundo</h1>;
}
```

### Props
```jsx
// Pasar información de padre a hijo
<Componente nombre="María" edad={16} />
```

### Estado
```jsx
// Manejar datos que cambian
const [count, setCount] = useState(0);
setCount(count + 1);
```

### Composición
```jsx
// Componentes dentro de componentes
<App>
  <Encabezado />
  <ListaAlumnos />
  <PieDePagina />
</App>
```

---

## 🏆 Lo que Aprendes

✅ Crear componentes funcionales reutilizables  
✅ Pasar y recibir props correctamente  
✅ Manejar estado con hooks  
✅ Responder a eventos de usuario  
✅ Crear formularios interactivos  
✅ Renderizar listas dinámicamente  
✅ Componer interfaces complejas  
✅ Implementar buenas prácticas profesionales  

---

## 📝 Ejercicios Propuestos

1. **Crear un componente Badge**
   - Mostrar el grado como badge coloreado

2. **Implementar búsqueda**
   - Filtrar alumnos por nombre

3. **Agregar edición**
   - Modificar datos de un alumno

4. **Implementar eliminación**
   - Borrar un alumno con confirmación

5. **Persistencia**
   - Guardar datos en localStorage

---

## 🔗 Enlaces Útiles

- 📖 [Documentación Oficial de React](https://react.dev/)
- 📖 [JSX en Profundidad](https://react.dev/learn/writing-markup-with-jsx)
- 📖 [Componentes y Props](https://react.dev/learn/your-first-component)
- 📖 [Hooks](https://react.dev/reference/react)
- 📖 [Vite](https://vite.dev/)

---

## 🤖 Tecnologías

- **React 19** - Biblioteca UI
- **Vite 8** - Build tool
- **CSS3** - Estilos
- **JavaScript ES6+** - Lenguaje

---

## ✨ Próxima Clase

**Clase #3: Ciclo de Vida y Hooks Avanzados**
- useEffect para efectos secundarios
- Ciclo de vida de componentes
- Fetch de APIs
- Gestión de errores

---

## 📞 Contacto & Soporte

**Bootcamp:** Colegio San Marcos  
**Instructor:** GitHub Copilot  
**Nivel:** Principiante (Fundamentals)  

---

## 📄 Licencia

Proyecto educativo - Libre para uso y modificación

---

**¡Bienvenido al mundo de React!** 🚀

Ejecuta `npm run dev` y comienza a aprender interactivamente.

