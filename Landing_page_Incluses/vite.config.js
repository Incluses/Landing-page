import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'./',
  server: {
    host: '0.0.0.0', // Configura para escutar em todas as interfaces de rede
    port: 3000,       // Certifique-se de que a porta aqui é a correta (pode ser outra se especificada no Render)
  },
})
