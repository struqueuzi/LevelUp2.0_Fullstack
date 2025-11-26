import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
// Nota: Deberías usar aquí tu Contexto de Autenticación real
// import { useAuth } from '../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  // const { user, logout } = useAuth(); // Descomentar cuando implementes el contexto de Auth
  const navigate = useNavigate();
  
  // Datos simulados del usuario logueado
  const user = { 
      name: 'Vicente Gamer', 
      email: 'vicente.gamer@levelup.cl', 
      memberSince: '2024-11-01' 
  };

  // Datos simulados de compras
  const recentOrders = [
    { id: 'ORD-001', date: '2025-11-15', total: 649980, status: 'Despachado' },
    { id: 'ORD-002', date: '2025-10-20', total: 79990, status: 'Entregado' },
  ];

  const handleLogout = () => {
    // logout(); // Usar la función de contexto real
    alert("Sesión cerrada. ¡Vuelve pronto!");
    navigate('/'); // Redirigir a la Home después de cerrar sesión
  };

  return (
    // Usa <section> semántico para el dashboard del usuario
    <section aria-labelledby="dashboard-heading">
      <Container>
        <h1 id="dashboard-heading" className="mb-4">
          🎮 Dashboard de {user.name}
        </h1>
        
        <Row>
          {/* Columna 1: Datos Personales (Perfil) */}
          <Col md={4} className="mb-4">
            <Card className="shadow-sm border-primary">
              <Card.Header className="bg-primary text-white">
                <Card.Title className="mb-0">Mi Perfil</Card.Title>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  **Nombre:** {user.name}
                </ListGroup.Item>
                <ListGroup.Item>
                  **Email:** {user.email}
                </ListGroup.Item>
                <ListGroup.Item>
                  **Miembro desde:** {user.memberSince}
                </ListGroup.Item>
              </ListGroup>
              
              <Card.Body>
                {/* Botón de Logout (Elemento Interactivo) */}
                <Button variant="outline-danger" className="w-100" onClick={handleLogout}>
                  Cerrar Sesión
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Columna 2: Mis Compras (Historial) */}
          <Col md={8} className="mb-4">
            <Card className="shadow-sm">
              <Card.Header className="bg-secondary text-white">
                <Card.Title className="mb-0">Historial de Compras Recientes</Card.Title>
              </Card.Header>
              <ListGroup variant="flush">
                {recentOrders.length > 0 ? (
                  recentOrders.map(order => (
                    <ListGroup.Item key={order.id} className="d-flex justify-content-between align-items-center">
                      <div>
                        **Pedido ID:** {order.id} <br />
                        <small className="text-muted">Fecha: {order.date}</small>
                      </div>
                      <div>
                        **Total:** ${order.total.toLocaleString('es-CL')} <br />
                        <span className={`badge ${order.status === 'Despachado' ? 'bg-info' : 'bg-success'}`}>{order.status}</span>
                      </div>
                    </ListGroup.Item>
                  ))
                ) : (
                  <ListGroup.Item className="text-center text-muted">
                    Aún no tienes compras realizadas.
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UserDashboard;