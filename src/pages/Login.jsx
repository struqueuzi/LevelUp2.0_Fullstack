import { useState } from "react"
import { useNavigate,Link } from "react-router-dom"

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"))

    if (!usuarioGuardado) {
      setError("No hay usuarios registrados.")
      return
    }

    if (email !== usuarioGuardado.email || password !== usuarioGuardado.password) {
      setError("Correo o contraseña incorrectos.")
      return
    }

    localStorage.setItem("sesion", "activa")
    window.dispatchEvent(new Event("sesionCambiada"))
    navigate("/perfil")
  }

  return (
    <div className="container mt-4" style={{ maxWidth: "450px" }}>
      <h2 className="text-center">Iniciar Sesión</h2>

      <form onSubmit={handleSubmit} className="mt-3">
        <input type="email" placeholder="Correo electrónico"
          className="form-control mb-3" required
          onChange={(e) => setEmail(e.target.value)} />

        <input type="password" placeholder="Contraseña"
          className="form-control mb-3" required
          onChange={(e) => setPassword(e.target.value)} />

        <Link to="/Registrarse" className="navbar-nav text-center">
                No tienes sesion? Registrate
        </Link>

        {error && <p className="text-danger">{error}</p>}

        <button className="btn btn-primary w-100 mt-2">Ingresar</button>
      </form>
    </div>
  )
}

export default Login
