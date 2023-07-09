import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

const baseURL = process.env.BASE_URL || "https://mogeko.github.io/userscripts";

export default defineConfig({
  build: { outDir: "../../release", emptyOutDir: false },
  plugins: [
    monkey({
      entry: "./src/main.js",
      build: { metaFileName: true },
      server: { mountGmApi: true },
      userscript: {
        name: "Steam 评分优化脚本",
        namespace: "https://greasyfork.org/zh-CN/users/113945-mogeko",
        author: "neilwong; Mogeko (搬运)",
        icon: "https://besticon.herokuapp.com/icon?size=80..120..200&url=store.steampowered.com",
        downloadURL: [baseURL, "better-steam-rating.user.js"].join("/"),
        updateURL: [baseURL, "better-steam-rating.meta.js"].join("/"),
        match: "http://store.steampowered.com/search*",
        grant: "none",
      },
    }),
  ],
});
