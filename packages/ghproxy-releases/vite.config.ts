import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

const base = process.env["BASE_URL"] || "https://mogeko.github.io/userscripts";

export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      build: { metaFileName: true },
      server: { mountGmApi: true },
      userscript: {
        name: "GitHub 加速 (Releases)",
        namespace: "https://mogeko.me",
        icon: "https://besticon.herokuapp.com/icon?size=80..120..200&url=github.com",
        downloadURL: [base, "ghproxy-releases.user.js"].join("/"),
        updateURL: [base, "ghproxy-releases.meta.js"].join("/"),
        match: "https://github.com/**",
        grant: "none",
        "run-at": "document-end",
      },
    }),
  ],
});
