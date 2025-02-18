import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/properties': {
        target: 'http://backend:5000', // Usar o nome do serviço Docker do back-end
        changeOrigin: true,
      }
    },
    host: '0.0.0.0', // Expor o servidor Vite para a rede
    port: 5173 // Garantir que o Vite esteja escutando na porta 5173
  }
})
