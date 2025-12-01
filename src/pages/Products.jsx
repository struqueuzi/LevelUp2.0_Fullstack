import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Datos de productos simulados basados en la Forma B
const productData = [
  { id: 1, name: 'PlayStation 5', price: 599990, desc: 'Consola de última generación.', img: '/assets/ps5.jpg' },
  { id: 2, name: 'PC Gamer ASUS ROG Strix', price: 1899990, desc: 'Potente equipo para los gamers más exigentes.', img: '/assets/pc-gamer.jpg' },
  { id: 3, name: 'Mouse Gamer Logitech G502 HERO', price: 49990, desc: 'Sensor de alta precisión y botones personalizables.', img: '/assets/mouse-g502.jpg' },
  { id: 4, name: 'Audífonos Razer BlackShark V2', price: 79990, desc: 'Sonido de alta fidelidad y comodidad superior.', img: '/assets/audifonos.jpg' },
  // ... añadir más productos de la Forma B aquí ...
];

const Products = () => {
  // Función simulada para añadir al carrito
  const handleAddToCart = (product) => {
    console.log(`Producto añadido al carrito: ${product.name}`);
    alert(`¡${product.name} añadido al carrito! (Implementación de carrito pendiente)`);
    // Lógica real: usar Context API o Redux para actualizar el estado del carrito
  };

  return (
    // Usa un elemento semántico <section> para el listado de productos
    <section aria-labelledby="products-heading">
      <Container>
        <h1 id="products-heading" className="text-center mb-5">
          🛒 Catálogo de Productos Level-Up
        </h1>
        
        {/* Diseño responsivo con <Row> y <Col> (Anexo 1) */}
        <Row>
          {productData.map((product) => (
            <Col md={6} lg={4} key={product.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img 
                  variant="top" 
                  src={product.img} 
                  alt={product.name} 
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="text-muted small">
                    {product.desc}
                  </Card.Text>
                  <h4 className="mt-auto mb-3">${product.price.toLocaleString('es-CL')}</h4>
                  
                  {/* Botón interactivo para la acción de compra */}
                  <Button 
                    variant="danger" 
                    onClick={() => handleAddToCart(product)}
                  >
                    Agregar al Carrito
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products;