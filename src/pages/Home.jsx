import { useEffect, useState } from "react"
import Card from "../components/Card"
import { loadFromLocalstorage } from "../utils/localstorageHelper"
import "../styles/Home.css"




function Home() {
  const [productos, setProductos] = useState([])
  const [noticias, setNoticias] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    // Cargar productos desde localStorage o JSON
    const guardadosProductos = loadFromLocalstorage("producto")
    const guardadasNoticias = loadFromLocalstorage("noticia")

    const fetchData = async () => {
      try {
        let dataProductos = guardadosProductos || []
        let dataNoticias = guardadasNoticias || []

        // Si no hay productos guardados, los trae del archivo
        if (dataProductos.length === 0) {
          const resProd = await fetch("src/data/producto.json")
          dataProductos = await resProd.json()
        }

        // Si no hay noticias guardadas, las trae del archivo
        if (dataNoticias.length === 0) {
          const resNews = await fetch("src/data/noticia.json")
          dataNoticias = await resNews.json()
        }

        // Cargar los primeros 3 de cada uno
        setProductos(dataProductos.slice(0, 3))
        setNoticias(dataNoticias.slice(0, 2))



        setTimeout(() => setCargando(false), 0)
      } catch (error) {
        console.error("Error al cargar datos:", error)
      }
    }



    fetchData()
  }, [])

  if (cargando) return <p className="text-center mt-5">Cargando contenido...</p>

  return (
    <div className="container mt-5">
      <div className="text-center mb-5">
        <h1>Bienvenido a la tienda Level Up</h1>
        <p>Explora los distintos aparatos disponibles aquí en nuestra tienda.</p>
      </div>

      {/* Productos destacados */}
      {productos.length > 0 && (
        <section className="mb-5">
          <h2 className="mb-3">Productos Interesantes</h2>
          <div className="row">
            {productos.map(p => (
              <div className="col-md-4" key={p.id}>
                <Card
                    codigo={p.codigo}
                    titulo={p.nombre}
                    contenido={`Precio: $${p.precio.toLocaleString()} — Categoría: ${p.categoria}`}
                    imagen={p.imagen}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Noticias recientes */}
      {noticias.length > 0 && (
        <section>
          <h2 className="mb-3">Noticias Recientes</h2>
          <div className="row">
            {noticias.map(item => (
            <div className="col-md-6 mb-4" key={item.id}>
              <div className="card shadow-sm">
                <img src={item.imagen} className="card-img-top" alt={item.titulo} />
                <div className="card-body">
                  <h5 className="card-title">{item.titulo}</h5>
                  <p className="card-text">{item.descripcion}</p>
                  <p className="text-muted small">{item.fecha}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </section>
      )}

      {/* Si no hay datos */}
      {productos.length === 0 && noticias.length === 0 && (
        <p className="text-center text-muted">Aún no hay productos ni noticias disponibles.</p>
      )}
    </div>
  )
}

export default Home




