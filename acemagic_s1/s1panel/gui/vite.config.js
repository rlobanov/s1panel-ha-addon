import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: './',  // Критично: относительный base для assets и правильной работы в subpath Ingress
  build: {
    outDir: 'dist',  // Явно указываем директорию вывода (стандартная)
  }
});
