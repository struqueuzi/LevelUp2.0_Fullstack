import React from 'react';
import { Link } from 'react-router-dom'; // Para la navegación entre páginas
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap'; 
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    // Usa un contenedor principal, aunque el <Header> y <Footer> contienen sus propias etiquetas semánticas
    <div id="levelup-home"> 
      
      {/* 1. HEADER: Componente de navegación (Reutilizable y semántico) */}
      <Header />

      {/* 2. MAIN: Contenido principal semántico (El corazón de la página) */}
      <main>
        
        {/* Sección de Héroe/Banner Principal (Marketing de la Forma B) */}
        <section 
          className="hero-banner text-center py-5" 
          aria-labelledby="hero-title"
          style={{ 
            backgroundColor: '#1a1a1a', 
            color: 'white', 
            backgroundImage: 'url(/assets/hero-bg.jpg)', // Fondo de imagen de gaming
            backgroundSize: 'cover'
          }}
        >
          <Container>
            {/* Título semántico principal */}
            <h1 id="hero-title" className="display-3 fw-bold mb-3">
              ¡Desafía tus límites con Level-Up Gamer!
            </h1>
            <p className="lead mt-3 mb-4">
              Proporcionamos productos de **alta calidad para gamers** en todo Chile. Explora, juega y gana con nosotros.
            </p>
            
            {/* Elemento Interactivo: Botón para iniciar la compra */}
            <Link to="/products">
              <Button variant="danger" size="lg" className="shadow-lg">
                Ver Tienda Ahora
              </Button>
            </Link>
          </Container>
        </section>

        {/* Sección de Carrousel de Productos Destacados (Cumple con elementos interactivos) */}
        <section 
          className="product-carousel py-5 bg-light" 
          aria-labelledby="carousel-heading"
        >
          <Container>
            <h2 id="carousel-heading" className="text-center mb-5">
              🚀 Lo Más Buscado
            </h2>
            <Carousel indicators={false} controls={true} interval={3000}>
              
              {/* Carrusel Item 1: PS5 */}
              <Carousel.Item>
                <Row className="justify-content-center align-items-center p-3">
                    <Col md={6}>
                        <img 
                            className="d-block w-100 rounded shadow"
                            src="/assets/ps5-placeholder.jpg"
                            alt="PlayStation 5"
                        />
                    </Col>
                    <Col md={6} className="text-dark">
                        <h3>PlayStation 5</h3>
                        <p>La consola de última generación. ¡Gráficos impresionantes y carga ultrarrápida!</p>
                        <Link to="/products/ps5">
                            <Button variant="info">Ver Detalle</Button>
                        </Link>
                    </Col>
                </Row>
              </Carousel.Item>

              {/* Carrusel Item 2: PC Gamer ASUS ROG Strix */}
              <Carousel.Item>
                <Row className="justify-content-center align-items-center p-3">
                    <Col md={6}>
                        <img 
                            className="d-block w-100 rounded shadow"
                            src="/assets/pcgamer-placeholder.jpg"
                            alt="PC Gamer ASUS ROG Strix"
                        />
                    </Col>
                    <Col md={6} className="text-dark">
                        <h3>PC Gamer ASUS ROG Strix</h3>
                        <p>Potente equipo con los últimos componentes para el gamer más exigente.</p>
                        <Link to="/products/pc-gamer">
                            <Button variant="info">Ver Detalle</Button>
                        </Link>
                    </Col>
                </Row>
              </Carousel.Item>

            </Carousel>
          </Container>
        </section>

        {/* 3. ARTÍCULO: Llamada a la acción (CTA) para el Registro */}
        {/* El registro es un Requerimiento Funcional clave (Forma B) */}
        <article className="community-cta py-5" style={{ backgroundColor: '#2c3e50', color: 'white' }}>
          <Container className="text-center">
            <h2 className="mb-3">Únete a la Comunidad LEVEL-UP</h2>
            <p className="lead">
              Conviértete en el héroe de tu propia historia. **Regístrate** para acceder a nuestro programa de fidelización y **obtener un descuento**.
            </p>
            {/* Hipervínculo al flujo de Registro */}
            <Link to="/register">
              <Button variant="warning" size="lg">
                ¡Registrarme Ahora!
              </Button>
            </Link>
          </Container>
        </article>

      </main>
      
      {/* 4. FOOTER: Componente de pie de página (Reutilizable y semántico) */}
      <Footer />
      
    </div>
  );
};

export default Home;