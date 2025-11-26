import { useState } from "react"
import { useNavigate } from "react-router-dom"

function MetodoPago() {
  const navigate = useNavigate()
  const [metodo, setMetodo] = useState("")
  const carrito = JSON.parse(localStorage.getItem("carrito")) || []

  const confirmarPago = () => {
    if (!metodo) {
      alert("Selecciona un método de pago")
      return
    }

    const usuario = JSON.parse(localStorage.getItem("usuario")) || {}
    usuario.compras = [...(usuario.compras || []), ...carrito]
    localStorage.setItem("usuario", JSON.stringify(usuario))
    localStorage.removeItem("carrito")

    alert("¡Compra realizada con éxito!")
    navigate("/perfil")
  }

  if (carrito.length === 0) {
    return <p className="text-center mt-5">El carrito está vacío.</p>
  }

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{minHeight: "80vh"}}>
      <div className="card p-4 shadow-lg" style={{maxWidth: "450px", width: "100%"}}>
        <h2 className="text-center mb-4">Método de Pago</h2>

        <p className="text-muted text-center">Selecciona tu forma de pago preferida 👇</p>

        <div className={`card p-3 mb-3 ${metodo === "Tarjeta" ? "border-primary shadow" : ""}`} 
          onClick={() => setMetodo("Tarjeta")}
          style={{ cursor: "pointer" }}>
          <div className="d-flex align-items-center">
            <span style={{fontSize: "1.8rem"}}>💳</span>
            <div className="ms-3">
              <h6 className="mb-0">Tarjeta Crédito / Débito</h6>
              <small className="text-muted">Visa, Mastercard, Redcompra</small>
            </div>
          </div>
        </div>

        <div className={`card p-3 mb-3 ${metodo === "Transferencia" ? "border-primary shadow" : ""}`}
          onClick={() => setMetodo("Transferencia")}
          style={{ cursor: "pointer" }}>
          <div className="d-flex align-items-center">
            <span style={{fontSize: "1.8rem"}}>🏦</span>
            <div className="ms-3">
              <h6 className="mb-0">Transferencia Bancaria</h6>
              <small className="text-muted">Desde cualquier banco</small>
            </div>
          </div>
        </div>

        <div className={`card p-3 mb-3 ${metodo === "Efectivo" ? "border-primary shadow" : ""}`}
          onClick={() => setMetodo("Efectivo")}
          style={{ cursor: "pointer" }}>
          <div className="d-flex align-items-center">
            <span style={{fontSize: "1.8rem"}}>Dinero</span>
            <div className="ms-3">
              <h6 className="mb-0">Efectivo</h6>
              <small className="text-muted">Pago al recibir el pedido</small>
            </div>
          </div>
        </div>

        <button className="btn btn-primary w-100 mt-3 py-2 fw-bold"
          onClick={confirmarPago}
          disabled={!metodo}>
          Confirmar Pago
        </button>

        <p className="text-center text-muted mt-3" style={{fontSize: "0.85rem"}}>
          Tus datos están seguros!
        </p>
      </div>
    </div>
  )
}

export default MetodoPago
