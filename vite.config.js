// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // --- CONFIGURACIÓN DE VITEST (CLAVE) ---
  test: {
    globals: true, // Permite usar 'describe', 'it', 'expect' globalmente
    environment: 'jsdom', // Simula un entorno de navegador
    setupFiles: './src/setupTests.js', // Opcional, pero buena práctica
    css: true, // Permite importar archivos CSS en las pruebas
  },
});