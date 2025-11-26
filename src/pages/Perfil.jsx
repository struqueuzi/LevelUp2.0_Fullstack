import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import InfoPersonal from "./InfoPersonal"
import Compras from "./Compras"
import "../styles/perfil.css"


function Perfil() {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState(null)
  const [opcion, setOpcion] = useState("info")

  useEffect(() => {
    if (localStorage.getItem("sesion") !== "activa") {
      navigate("/login")
      return
    }
    const datos = JSON.parse(localStorage.getItem("usuario"))
    setUsuario(datos)
  }, [])

  const cerrarSesion = () => {
    localStorage.removeItem("sesion")
    window.dispatchEvent(new Event("sesionCambiada"))
    navigate("/")
  }

  if (!usuario) return <p className="text-center mt-5">Cargando perfil...</p>

  return (
    <div className="container mt-5">
      <h2 className="text-center">Perfil del Usuario</h2>

      {/* MENÚ INTERNO */}
      <ul className="nav nav-tabs justify-content-center mt-4">
        <li className="nav-item">
          <button className={`nav-link ${opcion === "info" ? "active" : ""}`} onClick={() => setOpcion("info")}>
            Información Personal
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${opcion === "compras" ? "active" : ""}`} onClick={() => setOpcion("compras")}>
            Compras
          </button>
        </li>
      </ul>

      {/* CONTENIDO CAMBIANTE */}
      <div className="card mt-4 p-3">
        {opcion === "info" && <InfoPersonal usuario={usuario} />}
        {opcion === "compras" && <Compras />}
        {opcion === "recomendaciones" && <Recomendaciones />}
      </div>

      <button className="btn btn-outline-danger w-100 mt-3" onClick={cerrarSesion}>
        Cerrar sesión
      </button>
    </div>
  )
}

export default Perfil
