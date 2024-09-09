import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

const baseURL = process.env.BASE_URL || "https://userscripts.mogeko.me";

export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      build: { metaFileName: true },
      server: { mountGmApi: true },
      userscript: {
        name: "Down Git",
        namespace: "http://mogeko.me",
        icon: "https://besticon.herokuapp.com/icon?size=80..120..200&url=github.com",
        downloadURL: [baseURL, "down-git.user.js"].join("/"),
        updateURL: [baseURL, "down-git.meta.js"].join("/"),
        match: [
          "https://github.com/**",
          "https://github.com/**/tree/**",
          "https://github.com/**/blob/**",
        ],
        grant: "none",
        "run-at": "document-idle",
      },
    }),
  ],
});
