import path from "path";
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@core": path.resolve(process.cwd(), "src/core"),
      "@mobile": path.resolve(process.cwd(), "src/mobile"),
    },
  },
  publicDir: path.resolve(process.cwd(), "public"),
  build: {
    outDir: path.resolve(process.cwd(), "dist"),
    emptyOutDir: true,
  },
});
