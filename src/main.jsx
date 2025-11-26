// src/main.jsx (Modificado)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './context/CartContext'; // <-- Importar el Provider
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Envolver toda la aplicación con el proveedor del carrito */}
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
);