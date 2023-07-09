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
        name: "Exclude DV",
        namespace: "https://github.com/mogeko/userscripts",
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
        icon: "https://besticon.herokuapp.com/icon?size=80..120..200&url=rarbg.to",
        downloadURL: "https://mogeko.github.io/userscripts/exclude-dv.user.js",
        updateURL: "https://mogeko.github.io/userscripts/exclude-dv.meta.js",
        grant: "none",
      },
    }),
  ],
});
