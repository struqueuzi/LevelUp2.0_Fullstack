import React, { useState } from 'react';
// IMPORTANTE: Asegura que estas importaciones de Bootstrap estén aquí
import { Container, Form, Button, Card, Alert } from 'react-bootstrap'; 
// IMPORTANTE: Asegura que Link y useNavigate estén aquí
import { Link, useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  
  // HOOK DE NAVEGACIÓN: Debe ser llamado aquí
  const navigate = useNavigate(); 
  
  // Lógica de autenticación simulada (para pasar a /dashboard)
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulación de credenciales: test@levelup.cl / 123456
    if (formData.email === 'test@levelup.cl' && formData.password === '123456') {
      console.log('Login exitoso. Redirigiendo al Dashboard.');
      
      // La redirección al área privada
      navigate('/dashboard'); 
      
    } else {
      setError('Credenciales incorrectas. Usa: test@levelup.cl / 123456');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Limpia errores al cambiar el input
  };

  return (
    <section aria-labelledby="login-heading">
      <Container style={{ maxWidth: '450px' }}>
        <Card className="p-4 shadow">
          <h2 id="login-heading" className="text-center mb-4 text-warning">
            🔒 Iniciar Sesión
          </h2>
          
          {/* Muestra el error si existe */}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            
            <Form.Group className="mb-3" controlId="formLoginEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
                placeholder="Ingresa tu email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLoginPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                required 
                placeholder="Ingresa tu contraseña"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Acceder
            </Button>
          </Form>
          
          <div className="text-center mt-3">
            <small>
              ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
            </small>
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default Login;