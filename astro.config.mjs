import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import glsl from 'vite-plugin-glsl'

import { templateCompilerOptions } from '@tresjs/core';

export default defineConfig({
  integrations: [tailwind(), vue({...templateCompilerOptions,}), glsl()],
  vite: {
    plugins: [ glsl()],
    resolve: {
      alias: {
        '@components': '/src/components',
        '@assets': '/public/assets',
        '@data': '/src/data'
      },
    }  
    }
});