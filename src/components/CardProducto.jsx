function CardProducto({ producto, eliminar, modificar }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={producto.imagen || "https://via.placeholder.com/150"}
        className="card-img-top"
        alt={producto.nombre}
        style={{ maxHeight: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{producto.nombre}</h5>
        <p className="card-text text-muted">{producto.categoria}</p>
        <p className="card-text">${producto.precio.toLocaleString()}</p>
        <p className="card-text">{producto.detalle}</p>
        <div className="mt-auto d-flex justify-content-between">
          <button className="btn btn-outline-primary btn-sm" onClick={modificar}>
            Editar
          </button>
          <button className="btn btn-outline-danger btn-sm" onClick={eliminar}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardProducto
