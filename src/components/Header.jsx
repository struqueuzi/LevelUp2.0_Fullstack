import React from 'react';
// Importamos los componentes de Bootstrap necesarios
import { Navbar, Nav, Container, Button } from 'react-bootstrap'; 
// Importamos Link y NavLink para manejar las rutas sin recargar la página
import { Link, NavLink } from 'react-router-dom';

// Importamos el ícono de Carrito para la Navbar (requiere 'react-icons' instalado)
// Si no tienes react-icons, puedes usar un emoji '🛒'
// import { FaShoppingCart } from 'react-icons/fa'; 

const Header = () => {
  
  // Estado de Autenticación simulado para los botones de la esquina
  const isLoggedIn = false; // Cambia a 'true' para simular un usuario logueado
  const userName = "VicenteGamer";
  
  return (
    // Usa <header> semántico. bg-dark es para el color oscuro del wireframe.
    <header className="sticky-top"> 
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-lg">
        <Container>
          
          {/* Logo y Nombre de la Tienda */}
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-warning">
            LEVEL-UP GAMER 🎮
          </Navbar.Brand>
          
          {/* Botón para dispositivos móviles */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            
            {/* 1. Enlaces Principales del Centro */}
            <Nav className="mx-auto">
              {/* NavLink añade la clase 'active' automáticamente a la ruta actual */}
              <NavLink as={Link} to="/" className="nav-link mx-2">Home</NavLink>
              <NavLink as={Link} to="/products" className="nav-link mx-2">Productos</NavLink>
              <NavLink as={Link} to="/register" className="nav-link mx-2">Registro</NavLink>
              {/* Si hay otras páginas (Contacto, Sobre Nosotros), van aquí */}
            </Nav>
            
            {/* 2. Elementos Interactivos de la Derecha (Carrito y Auth) */}
            <Nav className="ms-auto align-items-center">
              
              {/* Botón de Carrito (Requerimiento Funcional) */}
              <Button as={Link} to="/cart" variant="outline-warning" className="me-3">
                🛒 Carrito (0)
              </Button>
              
              {/* Botones de Login / Dashboard */}
              {isLoggedIn ? (
                // Vista de Usuario Logueado
                <Nav.Item>
                  <Button as={Link} to="/dashboard" variant="outline-light">
                    Hola, {userName}
                  </Button>
                </Nav.Item>
              ) : (
                // Vista de Usuario No Logueado
                <Button as={Link} to="/login" variant="light">
                  Iniciar Sesión
                </Button>
              )}
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;