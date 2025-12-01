import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table, Alert } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, calculateTotals, updateQuantity, removeItem, addItem } = useCart();
  const { subtotal, discount, total, isLoggedIn } = calculateTotals();

  // Función de ejemplo para simular la acción de Checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }
    alert(`Procesando pago por $${total.toLocaleString('es-CL')}... (Simulación de pasarela de pago)`);
    // Aquí se implementaría la lógica para redirigir a la pasarela de pago.
  };

  // useEffect para simular añadir un producto (solo para demostración inicial)
  useEffect(() => {
    if (cartItems.length === 0) {
      // Si el carrito está vacío, añadir algunos productos simulados
      addItem({ id: 1, name: 'PlayStation 5', price: 599990, img: '/assets/ps5.jpg' });
      addItem({ id: 3, name: 'Mouse Gamer Logitech G502 HERO', price: 49990, img: '/assets/mouse.jpg' });
    }
  }, []);

  return (
    // Usa <section> semántico para la página de la cesta de compra
    <section aria-labelledby="cart-heading">
      <Container>
        <h1 id="cart-heading" className="text-center mb-5">
          Tu Carrito de Level-Up Gamer
        </h1>

        <Row>
          {/* Columna Izquierda: Listado de Productos (Siguiendo el wireframe) */}
          <Col md={8} className="mb-4">
            {cartItems.length === 0 ? (
              <Alert variant="info" className="text-center">
                Tu carrito está vacío. ¡<Link to="/products">Explora nuestros productos</Link> para empezar a comprar!
              </Alert>
            ) : (
              <Card className="shadow-sm">
                <Card.Body>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th>Producto</th>
                        <th>Precio Unitario</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <img src={item.img} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                            {item.name}
                          </td>
                          <td>${item.price.toLocaleString('es-CL')}</td>
                          <td>
                            {/* Elementos interactivos para modificar cantidad (Anexo 1) */}
                            <Button 
                              variant="outline-secondary" 
                              size="sm" 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </Button>
                            <span className="mx-2">{item.quantity}</span>
                            <Button 
                              variant="outline-secondary" 
                              size="sm" 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </Button>
                          </td>
                          <td>
                            <strong>${(item.price * item.quantity).toLocaleString('es-CL')}</strong>
                          </td>
                          <td>
                            <Button variant="outline-danger" size="sm" onClick={() => removeItem(item.id)}>
                              🗑️
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            )}
          </Col>

          {/* Columna Derecha: Resumen del Pedido (Checkout) */}
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Header className="bg-primary text-white">
                <Card.Title className="mb-0">Resumen del Pedido</Card.Title>
              </Card.Header>
              <Card.Body>
                
                {/* Visualización del Descuento (Requerimiento Forma B) */}
                {!isLoggedIn && (
                  <Alert variant="warning" className="text-center small">
                    ¡<Link to="/login">Inicia sesión</Link> o regístrate para obtener un 10% de descuento!
                  </Alert>
                )}

                <Table borderless size="sm">
                  <tbody>
                    <tr>
                      <td>Subtotal:</td>
                      <td className="text-end">${subtotal.toLocaleString('es-CL')}</td>
                    </tr>
                    <tr>
                      <td>**Descuento (10%):**</td>
                      <td className={`text-end ${discount > 0 ? 'text-success' : 'text-muted'}`}>
                        **-${discount.toLocaleString('es-CL')}**
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-bold fs-5">Total a Pagar:</td>
                      <td className="text-end fw-bold fs-5">${total.toLocaleString('es-CL')}</td>
                    </tr>
                  </tbody>
                </Table>
                
                {/* Botón de Checkout (Elemento Interactivo) */}
                <Button 
                  variant="success" 
                  size="lg" 
                  className="w-100 mt-3" 
                  onClick={handleCheckout} 
                  disabled={cartItems.length === 0}
                >
                  Continuar al Pago
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;