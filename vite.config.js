/* eslint-disable import/no-extraneous-dependencies,import/extensions */
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';
import Components from 'unplugin-vue-components/vite';
import { VuetifyResolver } from 'unplugin-vue-components/resolvers';

const configMain = defineConfig({
  plugins: [
    createVuePlugin(),
    Components({
      resolvers: [
        VuetifyResolver(),
      ],
      dirs: ['src'],
      include: ['node_modules/vuetify'],
      exclude: [],
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['tests/setup.js'],
  },
});

export default configMain;
