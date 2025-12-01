/**
 * Función para validar si una persona es mayor de 18 años a partir de su fecha de nacimiento.
 * @param {string} birthDateString - Fecha de nacimiento en formato 'YYYY-MM-DD'.
 * @returns {boolean} True si es mayor o igual a 18 años, False en caso contrario.
 */
export const validateAge = (birthDateString) => {
  if (!birthDateString) return false;

  const today = new Date();
  const dob = new Date(birthDateString); // Date of Birth

  let age = today.getFullYear() - dob.getFullYear();
  const monthDifference = today.getMonth() - dob.getMonth();

  // Ajuste fino: Si el mes actual es menor que el mes de nacimiento, 
  // o si es el mismo mes pero el día actual es menor, aún no ha cumplido años.
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  return age >= 18;
};