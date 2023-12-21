import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'day-one': resolve(__dirname, 'blogs/day-one/index.html'),
        'day-two': resolve(__dirname, 'blogs/day-two/index.html'),
        // 'day-three': resolve(__dirname, 'blogs/day-three/index.html'),
      },
    },
  },
});
