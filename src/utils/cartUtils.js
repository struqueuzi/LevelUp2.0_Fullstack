// src/utils/cartUtils.js

/**
 * Calcula el total con el descuento del 10% aplicado si el usuario está logueado.
 * * @param {number} subtotal - El total de la compra sin descuentos.
 * @param {boolean} isUserLoggedIn - Indica si el usuario ha iniciado sesión.
 * @returns {{discountAmount: number, finalPrice: number}} Objeto con el descuento y el total final.
 */
export const calculateDiscountedTotal = (subtotal, isUserLoggedIn) => {
  if (subtotal <= 0) {
    return { discountAmount: 0, finalPrice: 0 };
  }
  
  const DISCOUNT_RATE = 0.10; // 10%
  let discountAmount = 0;
  let finalPrice = subtotal;

  if (isUserLoggedIn) {
    // 1. Calcular el monto del descuento
    discountAmount = subtotal * DISCOUNT_RATE;
    // 2. Redondear el descuento al entero más cercano para evitar decimales monetarios
    discountAmount = Math.round(discountAmount); 
    
    // 3. Calcular el precio final
    finalPrice = subtotal - discountAmount;
  }

  return { discountAmount, finalPrice };
};