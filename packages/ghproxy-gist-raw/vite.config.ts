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
        name: "GitHub 加速 (Gist)",
        namespace: "https://mogeko.me",
        icon: "https://besticon.herokuapp.com/icon?size=80..120..200&url=github.com",
        downloadURL: [baseURL, "ghproxy-gist-raw.user.js"].join("/"),
        updateURL: [baseURL, "ghproxy-gist-raw.meta.js"].join("/"),
        match: "https://gist.github.com/**",
        grant: "none",
        "run-at": "document-end",
      },
    }),
  ],
});
