import { defineConfig } from 'vite';

export default defineConfig({
  base: '/MYBIKE-landing/',
  root: 'src',
  build: {
    // '../dist' виводить папку з src у корінь проєкту
    outDir: '../dist',
    emptyOutDir: true,
  },
});
