// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/": "/store",
  },
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    build: {
      cssCodeSplit: true,
    },
    css: {
      devSourcemap: true,
    },
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
});
