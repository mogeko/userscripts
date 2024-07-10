import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

const base = process.env["BASE_URL"] || "https://mogeko.github.io/userscripts";

export default defineConfig({
  plugins: [
    monkey({
      entry: "./src/main.ts",
      build: { metaFileName: true },
      server: { mountGmApi: true },
      userscript: {
        namespace: "https://mogeko.me",
        downloadURL: [base, "template.user.js"].join("/"),
        updateURL: [base, "template.meta.js"].join("/"),
        // Set your userscript metadata here.
      },
    }),
  ],
});
