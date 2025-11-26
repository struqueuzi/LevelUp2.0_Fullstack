import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../styles/Registrarse.css"

function Registrarse() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    nacimiento: "",
    password: ""
  })

  const [error, setError] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const calcularEdad = (fecha) => {
    const hoy = new Date()
    const nacimiento = new Date(fecha)
    let edad = hoy.getFullYear() - nacimiento.getFullYear()
    const meses = hoy.getMonth() - nacimiento.getMonth()
    
    if (meses < 0 || (meses === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--
    }
    return edad
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (calcularEdad(form.nacimiento) < 18) {
      setError("Debes ser mayor de 18 años para registrarte.")
      return
    }

    // Guardar usuario en LocalStorage
    localStorage.setItem("usuario", JSON.stringify(form))

    alert("Registro exitoso. Ahora puedes iniciar sesión")
    navigate("/login")
  }

  return (
    <div className="container mt-4" style={{ maxWidth: "450px" }}>
      <h2 className="text-center">Crear Cuenta</h2>

      <form onSubmit={handleSubmit} className="mt-3">
        <input type="text" name="nombre" placeholder="Nombre"
          className="form-control mb-3" required onChange={handleChange} />

        <input type="text" name="apellido" placeholder="Apellido"
          className="form-control mb-3" required onChange={handleChange} />

        <input type="email" name="email" placeholder="Correo electrónico"
          className="form-control mb-3" required onChange={handleChange} />

        <input type="date" name="nacimiento"
          className="form-control mb-3" required onChange={handleChange} />

        <input type="password" name="password" placeholder="Contraseña"
          className="form-control mb-3" required onChange={handleChange} />

        {error && <p className="text-danger">{error}</p>}

        <button className="btn btn-success w-100 mt-2">Registrarse</button>
      </form>
    </div>
  )
}

export default Registrarse
