// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          '@components': '/src/components',
          '@layouts': '/src/layouts',
          '@pages': '/src/pages',
          '@styles': '/src/styles',
        },
      },
	},

  integrations: [vue()],
});