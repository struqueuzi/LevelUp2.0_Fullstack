import { useEffect, useState } from "react"
import Card from "../components/Card"

function Catalogo() {
  const [productos, setProductos] = useState([])
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos")
  const [cargando, setCargando] = useState(true)
  const [paginaActual, setPaginaActual] = useState(1)
  const productosPorPagina = 6 // Número de productos por "página"

  useEffect(() => {
    fetch("src/data/producto.json")
      .then(res => res.json())
      .then(data => {
        setProductos(data)
        setTimeout(() => setCargando(false), 0)
      })  
      .catch(err => console.error("Error al cargar productos:", err))
  }, [])

  // Extraemos las categorías únicas del JSON
  const categorias = ["Todos", ...new Set(productos.map(p => p.categoria))]

  // Filtramos los productos según la categoría elegida
  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter(p => p.categoria === categoriaSeleccionada)

  // Calculamos el total de páginas
  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina)

  // Obtenemos los productos de la página actual
  const indiceUltimo = paginaActual * productosPorPagina
  const indicePrimero = indiceUltimo - productosPorPagina
  const productosPaginaActual = productosFiltrados.slice(indicePrimero, indiceUltimo)

  // Cambiar de página
  const cambiarPagina = (numPagina) => {
    if (numPagina < 1 || numPagina > totalPaginas) return
    setPaginaActual(numPagina)
  }

  // Resetear página cuando cambie la categoría
  useEffect(() => {
    setPaginaActual(1)
  }, [categoriaSeleccionada])

  if (cargando) return <p className="text-center mt-5">Cargando catálogo...</p>

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Catálogo de Productos</h1>

      {/* === Filtro de categoría === */}
      <div className="mb-4 text-center">
        <label htmlFor="categoriaSelect" className="me-2 fw-bold">
          Filtrar por categoría:
        </label>
        <select
          id="categoriaSelect"
          value={categoriaSeleccionada}
          onChange={e => setCategoriaSeleccionada(e.target.value)}
          className="form-select w-auto d-inline-block"
        >
          {categorias.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* === Listado de productos filtrados por página === */}
      <div className="row">
        {productosPaginaActual.map(p => (
          <div className="col-md-4 mb-4" key={p.codigo}>
            <Card
              codigo={p.codigo}
              titulo={p.nombre}
              contenido={`Precio: $${p.precio.toLocaleString()} — Categoría: ${p.categoria}`}
              imagen={p.imagen}
            />
          </div>
        ))}
      </div>

      {/* === Controles de paginación === */}
      {totalPaginas > 1 && (
        <div className="d-flex justify-content-center align-items-center gap-2 mb-5">
          <button className="btn btn-outline-primary" onClick={() => cambiarPagina(paginaActual - 1)} disabled={paginaActual === 1}>
            « Anterior
          </button>
          <span>Página {paginaActual} de {totalPaginas}</span>
          <button className="btn btn-outline-primary" onClick={() => cambiarPagina(paginaActual + 1)} disabled={paginaActual === totalPaginas}>
            Siguiente »
          </button>
        </div>
      )}

      {/* Si no hay productos en la categoría */}
      {productosFiltrados.length === 0 && (
        <p className="text-center text-muted">No hay productos en esta categoría.</p>
      )}
    </div>
  )
}

export default Catalogo
