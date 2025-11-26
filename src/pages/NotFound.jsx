import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    // Estructura simple sin layout (a menudo las páginas 404 son minimalistas)
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light text-center">
      <Container>
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2>Página No Encontrada</h2>
        <p className="lead">
          Parece que te has perdido en el mapa. Regresa a la acción.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg" className="mt-3">
            Volver a la Home
          </Button>
        </Link>
      </Container>
    </div>
  );
};

export default NotFound;