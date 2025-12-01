import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // Usa <footer> semántico. Fijo en la parte inferior de la página.
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row>
          
          {/* Columna 1: Información de la Tienda */}
          <Col md={4} className="mb-3">
            <h5 className="text-warning">LEVEL-UP GAMER</h5>
            <p className="small">
              La tienda líder en productos gaming de alta calidad en Chile.
              <br/>
              Despachos a todo el país.
            </p>
            <p className="small mb-0">© {new Date().getFullYear()} Todos los derechos reservados.</p>
          </Col>
          
          {/* Columna 2: Enlaces Rápidos */}
          <Col md={4} className="mb-3">
            <h5>Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li><Link to="/products" className="text-white text-decoration-none">Ver Productos</Link></li>
              <li><Link to="/cart" className="text-white text-decoration-none">Mi Carrito</Link></li>
              <li><Link to="/register" className="text-white text-decoration-none">Regístrate</Link></li>
            </ul>
          </Col>

          {/* Columna 3: Legal y Contacto */}
          <Col md={4} className="mb-3">
            <h5>Contacto</h5>
            <ul className="list-unstyled small">
              <li>Email: contacto@levelup.cl</li>
              <li>Teléfono: +56 9 1234 5678</li>
              <li><Link to="#" className="text-white text-decoration-none">Términos y Condiciones</Link></li>
            </ul>
          </Col>
          
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;