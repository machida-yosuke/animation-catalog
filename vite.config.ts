import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { getLoadContext } from './load-context'
import { cloudflareDevProxy } from '@react-router/dev/vite/cloudflare'

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [
    cloudflareDevProxy({ getLoadContext }),
    reactRouter(),
    tsconfigPaths(),
  ],
  ssr: {
    resolve: {
      conditions: ['workerd', 'worker', 'browser'],
    },
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'],
  },
  build: {
    minify: true,
  },
});
