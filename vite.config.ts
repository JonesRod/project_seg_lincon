import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  // Altere o base conforme o nome do seu repositório GitHub Pages:
  // Exemplo: base: '/project_seg_lincon/'
  // Para desenvolvimento local, use base: './'
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

