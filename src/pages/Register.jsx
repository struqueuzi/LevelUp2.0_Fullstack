import React, { useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { validateAge } from '../utils/validation';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    birthDate: '', // Campo clave para la validación
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Limpia errores al cambiar el input
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('');
    
    // --- LÓGICA DE VALIDACIÓN DE EDAD (REQUERIMIENTO FUNCIONAL) ---
    if (!validateAge(formData.birthDate)) {
      setError('❌ Solo se permite el registro a usuarios mayores de 18 años.');
      return;
    }

    // Aquí iría la llamada a la API o la lógica para guardar el usuario
    console.log('Registro exitoso para:', formData);
    setError('');
    setSuccess('✅ ¡Registro exitoso! Ya tienes acceso a tu descuento de bienvenida.');

    // Resetear formulario
    setFormData({ name: '', email: '', password: '', birthDate: '' });
  };

  return (
    // Usa un elemento semántico <section> para el contenido de registro
    <section aria-labelledby="register-heading">
      <Container style={{ maxWidth: '600px' }}>
        <Card className="p-4 shadow">
          <h2 id="register-heading" className="text-center mb-4">
            🚀 Únete a Level-Up Gamer
          </h2>
          
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          {/* Etiqueta <form> semántica para el ingreso de datos */}
          <Form onSubmit={handleSubmit}>
            
            {/* Campo Nombre */}
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Nombre Completo</Form.Label>
              <Form.Control 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            {/* Campo Email */}
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            {/* Campo Fecha de Nacimiento (Clave para el requisito >18) */}
            <Form.Group className="mb-3" controlId="formBirthDate">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control 
                type="date" 
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required 
                max={new Date().toISOString().split("T")[0]} // No permite fechas futuras
              />
            </Form.Group>

            {/* Campo Contraseña */}
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </Form.Group>

            {/* Botón de envío (Elemento interactivo) */}
            <Button variant="danger" type="submit" className="w-100 mt-3">
              Registrarme
            </Button>
          </Form>
        </Card>
      </Container>
    </section>
  );
};

export default Register;