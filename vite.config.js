import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
    },
  },
  server: {
    hmr: true,
  },
  plugins: [react()],
  base: "/kiss-stuco/"
});