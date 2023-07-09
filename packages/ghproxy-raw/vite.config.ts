import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

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
        match: "https://github.com/**",
        icon: "https://besticon.herokuapp.com/icon?size=80..120..200&url=github.com",
        downloadURL: "https://mogeko.github.io/userscripts/ghproxy-raw.user.js",
        updateURL: "https://mogeko.github.io/userscripts/ghproxy-raw.meta.js",
        "run-at": "document-end",
        grant: "none",
      },
    }),
  ],
});
