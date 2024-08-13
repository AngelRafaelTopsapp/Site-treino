import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/Site-treino/', // Caminho base para produção
  server: {
    historyApiFallback: true, // Redireciona todas as solicitações para index.html
  },
});
