// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@assets': '/public/assets',
        '@data': '/src/data'
      }
    }
  }
});