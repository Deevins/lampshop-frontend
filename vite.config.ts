// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/orders": {
        target: "http://localhost:8082",
        changeOrigin: true,
        secure: false,
      },
      "/products": {
        target: "http://localhost:8081",
        changeOrigin: true,
        secure: false,

      },

    },
  },
});
