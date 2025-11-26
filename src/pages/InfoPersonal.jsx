function InfoPersonal({ usuario }) {
  return (
    <div className="mt-3">
      <h4>Información Personal</h4>
      <p><strong>Nombre:</strong> {usuario.nombre}</p>
      <p><strong>Apellido:</strong> {usuario.apellido}</p>
      <p><strong>Correo:</strong> {usuario.email}</p>
      <p><strong>Edad:</strong> {usuario.edad}</p>
    </div>
  )
}

export default InfoPersonal
