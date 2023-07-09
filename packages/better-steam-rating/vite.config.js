import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

export default defineConfig({
  build: { outDir: "../../release", emptyOutDir: false },
  plugins: [
    monkey({
      entry: "src/main.js",
      build: { metaFileName: true },
      server: { mountGmApi: true },
      userscript: {
        name: "Steam 评分优化脚本",
        namespace: "https://greasyfork.org/zh-CN/users/113945-mogeko",
        match: "http://store.steampowered.com/search*",
        icon: "https://besticon.herokuapp.com/icon?size=80..120..200&url=store.steampowered.com",
        downloadURL:
          "https://mogeko.github.io/userscripts/better-steam-rating.user.js",
        updateURL:
          "https://mogeko.github.io/userscripts/better-steam-rating.meta.js",
        author: "neilwong; Mogeko (搬运)",
        grant: "none",
      },
    }),
  ],
});
