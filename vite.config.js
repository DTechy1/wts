import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [vue()],
  base: '/',
  server: {
    port: 5173,
    strictPort: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'resources/js'),
    },
  },
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    manifest: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue') || id.includes('vue-router')) {
              return 'vue-vendor';
            }
            if (id.includes('gsap') || id.includes('swiper')) {
              return 'animation-vendor';
            }
            return 'vendor';
          }
        }
      }
    },
  },
});