import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hugohiraoka.dev',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
