// vite.config.js

import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: "terser",
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@mixins": path.resolve(__dirname, "src/sass/utils/mixins.scss"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@mixins" as *;`,
      },
    },
  },
});
