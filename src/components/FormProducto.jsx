import { useEffect, useState } from "react"

function FormProducto({ agregar, productoEditando, editar, setProductoEditando }) {
  const [codigo, setCodigo] = useState("")
  const [categoria, setCategoria] = useState("")
  const [nombre, setNombre] = useState("")
  const [precio, setPrecio] = useState("")
  const [detalle, setDetalle] = useState("")
  const [imagen, setImagen] = useState("")

  useEffect(() => {
    if (productoEditando) {
      setCodigo(productoEditando.codigo)
      setCategoria(productoEditando.categoria)
      setNombre(productoEditando.nombre)
      setPrecio(productoEditando.precio)
      setDetalle(productoEditando.detalle)
      setImagen(productoEditando.imagen)
    }
  }, [productoEditando])

  const resetForm = () => {
    setCodigo("")
    setCategoria("")
    setNombre("")
    setPrecio("")
    setDetalle("")
    setImagen("")
    setProductoEditando(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nuevoProducto = {
      codigo,
      categoria,
      nombre,
      precio: Number(precio),
      detalle,
      imagen,
    }

    if (productoEditando) {
      editar(nuevoProducto)
    } else {
      agregar(nuevoProducto)
    }

    resetForm()
  }

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-4 shadow-sm">
      <h5>{productoEditando ? "Editar Producto" : "Agregar Producto"}</h5>
      <div className="mb-2">
        <label className="form-label">Código</label>
        <input className="form-control" value={codigo} onChange={e => setCodigo(e.target.value)} required />
      </div>
      <div className="mb-2">
        <label className="form-label">Categoría</label>
        <input className="form-control" value={categoria} onChange={e => setCategoria(e.target.value)} required />
      </div>
      <div className="mb-2">
        <label className="form-label">Nombre</label>
        <input className="form-control" value={nombre} onChange={e => setNombre(e.target.value)} required />
      </div>
      <div className="mb-2">
        <label className="form-label">Precio</label>
        <input type="number" className="form-control" value={precio} onChange={e => setPrecio(e.target.value)} required />
      </div>
      <div className="mb-2">
        <label className="form-label">Detalle</label>
        <textarea className="form-control" value={detalle} onChange={e => setDetalle(e.target.value)} />
      </div>
      <div className="mb-2">
        <label className="form-label">Imagen (URL)</label>
        <input className="form-control" value={imagen} onChange={e => setImagen(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        {productoEditando ? "Guardar Cambios" : "Agregar Producto"}
      </button>
      {productoEditando && (
        <button type="button" className="btn btn-secondary mt-2 ms-2" onClick={resetForm}>
          Cancelar
        </button>
      )}
    </form>
  )
}

export default FormProducto
