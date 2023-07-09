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
        name: "Down Git",
        namespace: "http://mogeko.me",
        match: [
          "https://github.com/**",
          "https://github.com/**/tree/**",
          "https://github.com/**/blob/**",
        ],
        icon: "https://besticon.herokuapp.com/icon?size=80..120..200&url=github.com",
        downloadURL: "https://mogeko.github.io/userscripts/down-git.user.js",
        updateURL: "https://mogeko.github.io/userscripts/down-git.meta.js",
        "run-at": "document-idle",
        grant: "none",
      },
    }),
  ],
});
