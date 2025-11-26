import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Carrito() {
  const [carrito, setCarrito] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("sesion") !== "activa") {
      navigate("/login")
      return
    }

    const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || []
    setCarrito(carritoGuardado)
  }, [])

  const actualizarCantidad = (codigo, nuevaCant) => {
    const actualizado = carrito.map(item =>
      item.codigo === codigo
        ? { ...item, cantidad: Math.max(1, nuevaCant) }
        : item
    )
    setCarrito(actualizado)
    localStorage.setItem("carrito", JSON.stringify(actualizado))
  }

  const eliminarProducto = (codigo) => {
    const filtrado = carrito.filter(item => item.codigo !== codigo)
    setCarrito(filtrado)
    localStorage.setItem("carrito", JSON.stringify(filtrado))
  }

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

  const finalizarCompra = () => {
  const comprasAnteriores = JSON.parse(localStorage.getItem("compras")) || []
  const nuevasCompras = [...comprasAnteriores, ...carrito]

  localStorage.setItem("compras", JSON.stringify(nuevasCompras))
  localStorage.removeItem("carrito")

  alert("¡Compra realizada con éxito!")
  setCarrito([])
  navigate("/catalogo")
}

  if (carrito.length === 0) {
    return (
      <div className="text-center mt-5">
        <h3>El carrito está vacío :)</h3>
        <Link to="/catalogo" className="btn btn-primary mt-3">
          Ir al catálogo
        </Link>
      </div>
    )
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Mi Carrito</h2>

      <div className="row">
        <div className="col-md-8">
          {carrito.map((item) => (
            <div className="card mb-3 shadow-sm" key={item.codigo}>
              <div className="row g-0">
                <div className="col-md-4 d-flex align-items-center justify-content-center bg-light">
                  <img
                    src={item.imagen}
                    className="img-fluid rounded-start"
                    alt={item.nombre}
                    style={{ maxHeight: "120px", objectFit: "contain" }}
                  />
                </div>

                <div className="col-md-8">
                  <div className="card-body">
                    <h5>{item.nombre}</h5>
                    <p className="text-muted mb-1">Precio: ${item.precio.toLocaleString()}</p>

                    <div className="d-flex align-items-center mb-2">
                      <label className="me-2 fw-bold">Cantidad:</label>
                      <input
                        type="number"
                        min="1"
                        value={item.cantidad}
                        onChange={(e) =>
                          actualizarCantidad(item.codigo, Number(e.target.value))
                        }
                        className="form-control"
                        style={{ width: "80px" }}
                      />
                    </div>

                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => eliminarProducto(item.codigo)}
                    >
                      Quitar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen de compra */}
        <div className="col-md-4">
          <div className="card shadow-lg p-3">
            <h4>Resumen</h4>
            <p className="fw-bold">
              Total a pagar: <span className="text-success">${total.toLocaleString()}</span>
            </p>
            <Link to="/pago" className="btn btn-primary w-100 mt-3">
                Proceder al pago →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carrito
