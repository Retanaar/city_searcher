// eslint-disable-next-line simple-import-sort/imports
import dns from 'dns';

import pluginReact from '@vitejs/plugin-react';
import {
  defineConfig,
  splitVendorChunkPlugin as pluginSplitVendorChunk,
} from 'vite';
import { createHtmlPlugin as pluginHTML } from 'vite-plugin-html';
import pluginSvg from 'vite-plugin-svgr';
import pluginCopyTsconfigAliases from 'vite-tsconfig-paths';

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  base: '/',

  build: {
    chunkSizeWarningLimit: 1024,
  },

  server: {
    open: true,
    port: 3500,
  },

  preview: {
    open: true,
    port: 4500,
  },

  plugins: [
    pluginSvg({
      exportAsDefault: true,
    }),
    pluginHTML({
      minify: true,
      inject: { tags: [{ tag: 'base', attrs: { href: '/' } }] },
    }),
    pluginReact(),
    pluginSplitVendorChunk(),
    pluginCopyTsconfigAliases(),
  ],
});
