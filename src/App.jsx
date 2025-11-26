import React from 'react';
// Importaciones de React Router DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importaciones de Bootstrap (deben ir al inicio)
import 'bootstrap/dist/css/bootstrap.min.css';

// Importaciones de tus componentes de Estructura y Páginas
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Register from './pages/Register';
import Login from './pages/Login';          // Importado
import UserDashboard from './pages/UserDashboard'; // Importado
import Cart from './pages/Cart';            // Asumiendo que has creado Cart.jsx
import NotFound from './pages/NotFound';


function App() {
  return (
    // Componente principal para manejar la navegación
    <BrowserRouter>
      <Routes>
        
        {/* RUTA PRINCIPAL: Todas las rutas aquí dentro usarán el Header y Footer del Layout */}
        <Route path="/" element={<Layout />}>
          
          {/* 1. Ruta principal (Home.jsx) */}
          <Route index element={<Home />} /> 
          
          {/* 2. Ruta de Productos */}
          <Route path="products" element={<Products />} />
          
          {/* 3. Ruta de Registro (con validación de edad) */}
          <Route path="register" element={<Register />} />
          
          {/* 4. AÑADIDO: Ruta de Login */}
          <Route path="login" element={<Login />} />
          
          {/* 5. AÑADIDO: Ruta de Carrito */}
          <Route path="cart" element={<Cart />} /> 
          
          {/* 6. AÑADIDO: Ruta del Dashboard (área privada) */}
          <Route path="dashboard" element={<UserDashboard />} /> 

        </Route>
        
        {/* RUTA DE FALLBACK: Para manejar URLs que no coinciden (404) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;