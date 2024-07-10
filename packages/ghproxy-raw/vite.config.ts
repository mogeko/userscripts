import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

const base = process.env["BASE_URL"] || "https://mogeko.github.io/userscripts";

export default defineConfig({
  build: { outDir: "../../release", emptyOutDir: false },
  plugins: [
    monkey({
      entry: "src/main.ts",
      build: { metaFileName: true },
      server: { mountGmApi: true },
      userscript: {
        name: "GitHub 加速 (Raw)",
        namespace: "https://mogeko.me",
        icon: "https://besticon.herokuapp.com/icon?size=80..120..200&url=github.com",
        downloadURL: [base, "ghproxy-raw.user.js"].join("/"),
        updateURL: [base, "ghproxy-raw.meta.js"].join("/"),
        match: "https://github.com/**",
        grant: "none",
        "run-at": "document-end",
      },
    }),
  ],
});
