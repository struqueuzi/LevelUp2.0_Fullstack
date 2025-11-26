import { useEffect, useState } from "react"
import CardProducto from "../components/CardProducto"
import FormProducto from "../components/FormProducto"
import { loadFromLocalstorage, saveLocalstorage } from "../utils/localstorageHelper"

function Admin() {
  const [productos, setProductos] = useState([])
  const [productoEditando, setProductoEditando] = useState(null)
  const [cargando, setCargando] = useState(true)

  // Cargar productos
  useEffect(() => {
    const guardados = loadFromLocalstorage("productos")
    if (guardados) {
      setProductos(guardados)
      setCargando(false)
    } else {
      fetch("/src/data/productos.json")
        .then(res => res.json())
        .then(data => {
          setProductos(data)
          setTimeout(() => setCargando(false), 1000)
        })
        .catch(err => console.error("Error cargando productos:", err))
    }
  }, [])

  // Guardar cambios
  useEffect(() => {
    if (productos.length > 0) saveLocalstorage("productos", productos)
  }, [productos])

  const agregarProducto = (nuevo) => {
    const existe = productos.some(p => p.codigo === nuevo.codigo)
    if (existe) return alert("⚠ El producto ya existe!")
    setProductos([...productos, nuevo])
  }

  const eliminarProducto = (codigo) => {
    if (!confirm("¿Eliminar producto?")) return
    setProductos(productos.filter(p => p.codigo !== codigo))
  }

  const editarProducto = (actualizado) => {
    setProductos(productos.map(p => p.codigo === actualizado.codigo ? actualizado : p))
  }

  if (cargando) return <p>Cargando productos...</p>

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Administrador de Productos - Level Up</h2>

      <FormProducto
        agregar={agregarProducto}
        productoEditando={productoEditando}
        editar={editarProducto}
        setProductoEditando={setProductoEditando}
      />

      <div className="row mt-4">
        {productos.map(prod => (
          <div className="col-md-4 mb-3" key={prod.codigo}>
            <CardProducto
              producto={prod}
              eliminar={() => eliminarProducto(prod.codigo)}
              modificar={() => setProductoEditando(prod)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Admin
