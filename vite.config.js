import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/info_hub/',
  build:{
    rollupOptions:{
      external:['react-route-dom'],
    },
  },

  
 
});
