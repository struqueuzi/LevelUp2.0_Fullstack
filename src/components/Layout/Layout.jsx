import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header'; // <-- Asegúrate que la ruta sea correcta
import Footer from '../Footer/Footer'; // <-- Asegúrate que la ruta sea correcta

const Layout = () => {
  return (
    // d-flex flex-column min-vh-100 es un patrón de Bootstrap para asegurar que el footer quede abajo.
    <div className="d-flex flex-column min-vh-100"> 
      
      <Header /> // 
      
      <main className="flex-grow-1 py-4">
        <Outlet /> // 
      </main>
      
      <Footer /> //       
    </div>
  );
};

export default Layout;