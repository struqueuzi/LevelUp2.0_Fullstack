import { useParams, Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

function DetalleProducto() {
  const { codigo } = useParams()
  const [producto, setProducto] = useState(null)
  const [cantidad, setCantidad] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/src/data/producto.json")
      .then(res => res.json())
      .then(data => {
        const encontrado = data.find(p => p.codigo === codigo)
        setProducto(encontrado)
      })
      .catch(err => console.error("Error cargando el producto:", err))
  }, [codigo])

  const agregarCarrito = () => {
    if (localStorage.getItem("sesion") !== "activa") {
      alert("Debes iniciar sesión para agregar productos al carrito")
      navigate("/login")
      return
    }

    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || []

    const indiceExistente = carritoActual.findIndex(
      (item) => item.codigo === producto.codigo
    )

    if (indiceExistente >= 0) {
      carritoActual[indiceExistente].cantidad += cantidad
    } else {
      carritoActual.push({ ...producto, cantidad })
    }

    localStorage.setItem("carrito", JSON.stringify(carritoActual))
    alert("Producto agregado al carrito")
  }

  if (!producto) {
    return <p className="text-center mt-5">Cargando información del producto...</p>
  }

  return (
    <div className="container mt-5">
      <div className="card mx-auto shadow-lg" style={{ maxWidth: "900px" }}>
        <div className="row g-0">
          {/* Columna Imagen */}
          <div className="col-md-5 d-flex align-items-center justify-content-center bg-light">
            <img
              src={producto.imagen}
              className="img-fluid rounded-start"
              alt={producto.nombre}
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </div>

          {/* Columna Información */}
          <div className="col-md-7">
            <div className="card-body">
              <h2 className="card-title mb-3 text-center">{producto.nombre}</h2>
              <p className="text-muted">Código: {producto.codigo}</p>
              <p className="text-muted">Detalle: {producto.detalle}</p>
              <p className="text-muted">Categoría: {producto.categoria}</p>

              <h4 className="text-success mb-4">
                ${producto.precio.toLocaleString()}
              </h4>

              {/* Cantidad */}
              <div className="d-flex align-items-center mb-4">
                <label className="me-2 fw-bold">Cantidad:</label>
                <input
                  type="number"
                  min="1"
                  value={cantidad}
                  onChange={(e) => setCantidad(Number(e.target.value))}
                  className="form-control"
                  style={{ width: "90px" }}
                />
              </div>

              {/* Botón Carrito */}
              <button className="btn btn-success w-100 mb-3" onClick={agregarCarrito}>
                🛒 Agregar al carrito
              </button>

              <Link to="/catalogo" className="btn btn-outline-primary w-100">
                ← Volver al catálogo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetalleProducto
