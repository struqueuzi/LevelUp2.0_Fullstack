import { useEffect, useState } from "react"
import "../styles/Noticias.css"

function Noticias() {
  const [vista, setVista] = useState("noticias") // "noticias" o "eventos"
  const [noticias, setNoticias] = useState([])
  const [eventos, setEventos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch("src/data/noticia.json").then(res => res.json()),
      fetch("src/data/evento.json").then(res => res.json())
    ])
      .then(([noticiasData, eventosData]) => {
        setNoticias(noticiasData)
        setEventos(eventosData)
        setCargando(false)
      })
      .catch(err => console.error("Error cargando datos:", err))
  }, [])

  if (cargando) return <p className="text-center mt-5">Cargando contenido...</p>

  return (
    <div className="container mt-4">
      {/* === Navbar local para Noticias/Eventos === */}
      <nav className="nav justify-content-center mb-4">
        <button
          className={`btn mx-2 ${vista === "noticias" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={() => setVista("noticias")}
        >
          Noticias
        </button>
        <button
          className={`btn mx-2 ${vista === "eventos" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={() => setVista("eventos")}
        >
          Eventos
        </button>
      </nav>

      {/* === Vista de Noticias === */}
      {vista === "noticias" && (
        <div className="row">
          {noticias.map(item => (
            <div className="col-md-6 mb-4" key={item.id}>
              <div className="card shadow-sm">
                <img src={item.imagen} className="card-img-top" alt={item.titulo} />
                <div className="card-body">
                  <h5 className="card-title">{item.titulo}</h5>
                  <p className="card-text">{item.descripcion}</p>
                  <p className="text-muted small">{item.fecha}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* === Vista de Eventos === */}
      {vista === "eventos" && (
        <div className="row">
          {eventos.map(evento => (
            <div className="col-md-6 mb-4" key={evento.id}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{evento.titulo}</h5>
                  <p className="card-text">{evento.descripcion}</p>
                  <p className="text-muted small">
                    📅 {evento.fecha} — 📍 {evento.ubicacion}
                  </p>

                  {/* Mapa embebido */}
                  <div className="ratio ratio-16x9">
                    <iframe
                      src={evento.mapa}
                      allowFullScreen
                      loading="lazy"
                      title={`Mapa ${evento.titulo}`}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Noticias
