import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

const baseURL = process.env.BASE_URL || "https://mogeko.github.io/userscripts";

export default defineConfig({
  build: { outDir: "../../release", emptyOutDir: false },
  plugins: [
    monkey({
      entry: "./src/main.ts",
      build: { metaFileName: true },
      server: { mountGmApi: true },
      userscript: {
        namespace: "https://mogeko.me",
        downloadURL: [baseURL, "template.user.js"].join("/"),
        updateURL: [baseURL, "template.meta.js"].join("/"),
        // Set your userscript metadata here.
      },
    }),
  ],
});
