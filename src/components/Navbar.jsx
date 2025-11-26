import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react"


function Navbar() {
  
  const [sesionActiva, setSesionActiva] = useState(false)

  useEffect(() => {
  const actualizar = () => {
    const sesion = localStorage.getItem("sesion")
    setSesionActiva(sesion === "activa")
  }

  window.addEventListener("sesionCambiada", actualizar)
  actualizar() // revisar al montar

  return () => window.removeEventListener("sesionCambiada", actualizar)
}, [])
  
  return (
    <header>
      {/* Navbar superior (izquierda) */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
        <div className="container-fluid">
          {/* Logo alineado a la izquierda */}
          <Link className="navbar-brand" to="/">Tienda Level Up</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Enlaces de la parte superior */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/carrito">Carrito</Link>
            </li>
            
            <li className="navbar-nav nav-item">
              {sesionActiva ? (
                <Link className="nav-link" to="/perfil">Perfil</Link>
              ) : (
                <>
                  <Link className="nav-link" to="/login">Iniciar Sesión</Link>
                  <Link className="nav-link" to="/registrarse">Registrarse</Link>
                </>
              )}
            </li>

          </ul>
        </div>
      </nav>

      {/* Navbar inferior (centrada) */}
      <nav className="navbar navbar-expand bg-secondary navbar-dark justify-content-center py-2">
        <ul className="navbar-nav text-center">
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/catalogo">Catálogo</Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/noticias">Noticias y eventos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar