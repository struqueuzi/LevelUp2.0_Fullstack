import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Admin from './pages/Admin'

import Catalogo from "./pages/Catalogo"
import Noticias from "./pages/Noticias"
import DetalleProducto from "./pages/DetalleProducto"
import Footer from "./components/Footer"

import Login from "./pages/Login"
import Perfil from "./pages/Perfil"
import Registrarse from "./pages/Registrarse"
import Carrito from "./pages/carrito"
import MetodoPago from "./pages/MetodoPAgo"




function App() {
  return (
    <>
      <Navbar/>
      <div className='container mt-4'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/admin' element={<Admin/>}></Route>
          <Route path='/catalogo' element={<Catalogo />}></Route>
          <Route path='/noticias' element={<Noticias />}></Route>
          <Route path="/producto/:codigo" element={<DetalleProducto />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/pago" element={<MetodoPago />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App