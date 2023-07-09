import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      name: "douban2rarbg",
      formats: ["iife"],
    },
    outDir: "../../release",
    emptyOutDir: false,
    minify: false,
  },
});
