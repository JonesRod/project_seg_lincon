/*import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  // Altere o base conforme o nome do seu repositório GitHub Pages:
  // Exemplo: base: '/project_seg_lincon/'
  //base: '/project_seg_lincon/',
  // Para desenvolvimento local, use base: './'
  base: './',
  // versõa condicional para produção
  //base: process.env.NODE_ENV === 'production' ? '/project_seg_lincon/' : './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
// para iniciar a pagina, abra o terminal e execute: npm run dev. Será gerada uma pagina web que você pode acessar no navegador.
// Acesse o endereço http://localhost:5173/ para visualizar a aplicação em desenvolvimento.
// não funciona no github pages, pois o caminho é diferente, então é necessário alterar o base para o nome do repositório
*/
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/project_seg_lincon/' : './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

