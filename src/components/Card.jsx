
import { Link } from "react-router-dom"

function Card({ codigo, titulo, contenido, imagen }) {
  return (
    <div className="card h-100 shadow-sm">
      <Link to={`/producto/${codigo}`} className="text-decoration-none text-dark">
        <img src={imagen} className="card-img-top" alt={titulo} />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{contenido}</p>
        </div>
      </Link>
    </div>
  )
}

export default Card
