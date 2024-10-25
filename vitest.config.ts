import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    css: true,
    // ... Specify options here.
    setupFiles: './vitest.setup.ts',
  },
});
