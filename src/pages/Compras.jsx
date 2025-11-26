import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function Compras() {
  const [compras, setCompras] = useState([])

  useEffect(() => {
    const comprasGuardadas = JSON.parse(localStorage.getItem("compras")) || []
    setCompras(comprasGuardadas)
  }, [])

  if (compras.length === 0) {
    return (
      <div className="text-center">
        <p>No has realizado compras aún.</p>
        <Link to="/catalogo" className="btn btn-primary">
          Ir al catálogo
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h4 className="text-center mb-3"> Historial de Compras</h4>

      {compras.map((item, index) => (
        <div className="card mb-3 shadow-sm" key={index}>
          <div className="row g-0">
            {/* Imagen */}
            <div className="col-md-3 bg-light d-flex justify-content-center align-items-center">
              <img
                src={item.imagen}
                alt={item.nombre}
                className="img-fluid rounded"
                style={{ maxHeight: "100px", objectFit: "contain" }}
              />
            </div>

            {/* Info */}
            <div className="col-md-9">
              <div className="card-body">
                <h5>{item.nombre}</h5>
                <p className="text-muted mb-1">Código: {item.codigo}</p>
                <p className="mb-1">Cantidad: {item.cantidad}</p>
                <p className="fw-bold text-success">
                  Total: ${(item.precio * item.cantidad).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Compras
