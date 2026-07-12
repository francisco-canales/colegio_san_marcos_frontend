function PieDePagina({ anio = 2026, empresa = 'Colegio San Marcos' }) {
  return (
    <>
      <footer className="pie-de-pagina">
        <div className="contenedor-footer">
          <p>
            &copy; {anio} {empresa}. Todos los derechos reservados.
          </p>
          <nav className="links-footer">
            <a href="#contacto">Contacto</a>
            <a href="#privacidad">Privacidad</a>
            <a href="#terminos">Términos</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default PieDePagina;
