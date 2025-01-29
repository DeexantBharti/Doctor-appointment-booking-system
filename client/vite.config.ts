import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Or any other plugin you're using
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server:{port:5173}
  // plugins: [react()],
});
