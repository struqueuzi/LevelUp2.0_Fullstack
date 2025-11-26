import React, { createContext, useState, useContext } from 'react';

// 1. Crear el Contexto
const CartContext = createContext();

// Simulamos el estado de autenticación (deberías obtenerlo de tu contexto de Auth)
const useAuth = () => ({
  isLoggedIn: true, // Cambia a 'false' para probar sin descuento
});

// Constantes para el proyecto LEVEL-UP
const DISCOUNT_RATE = 0.10; // 10% de descuento para usuarios registrados

// 2. Crear el Proveedor del Contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { isLoggedIn } = useAuth(); // Usamos el estado de login

  // --- Lógica de cálculo del carrito ---
  const calculateTotals = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    
    // Aplicar descuento solo si el usuario está logueado (Requerimiento Forma B)
    const discount = isLoggedIn ? subtotal * DISCOUNT_RATE : 0;
    const total = subtotal - discount;

    return { subtotal, discount, total, isLoggedIn };
  };

  // --- Funciones para manipular el carrito ---
  const addItem = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);

      if (existingItemIndex > -1) {
        // Si el producto ya existe, actualiza la cantidad
        return prevItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Si es un producto nuevo, añádelo
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // Eliminar un producto
  const removeItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };
  
  // Modificar cantidad (ej. para aumentar/disminuir)
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      return removeItem(productId);
    }
    setCartItems(prevItems => prevItems.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };


  const value = {
    cartItems,
    calculateTotals,
    addItem,
    removeItem,
    updateQuantity,
    isLoggedIn,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// 3. Hook Personalizado para usar el Carrito
export const useCart = () => useContext(CartContext);