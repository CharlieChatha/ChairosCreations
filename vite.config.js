import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions:{
      input:{
        main: '/index.html',
        products: '/src/assets/pages/products.html',
        contact: '/src/assets/pages/contact.html',
        about: '/src/assets/pages/about.html',
      }
    }
  },
});