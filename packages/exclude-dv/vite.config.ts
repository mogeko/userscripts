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
        name: "Exclude DV",
        namespace: "https://github.com/mogeko/userscripts",
        icon: "https://besticon.herokuapp.com/icon?size=80..120..200&url=rarbg.to",
        downloadURL: [baseURL, "exclude-dv.user.js"].join("/"),
        updateURL: [baseURL, "exclude-dv.meta.js"].join("/"),
        match: [
          "https://rarbg.to/torrents*",
          "https://rarbg.to/top10",
          "https://rarbg.to/tv*",
          "https://rarbg.to/s*",
          "https://rarbgmirror.com/torrents*",
          "https://rarbgmirror.com/top10",
          "https://rarbgmirror.com/tv*",
          "https://rarbgmirror.com/s*",
        ],
        grant: "none",
      },
    }),
  ],
});
