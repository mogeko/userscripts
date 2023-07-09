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
        name: "Douban2RARBG",
        namespace: "https://mogeko.me",
        match: "https://movie.douban.com/subject/*",
        icon: "https://besticon.herokuapp.com/icon?size=80..120..200&url=douban.com",
        downloadURL:
          "https://mogeko.github.io/userscripts/douban2rarbg.user.js",
        updateURL: "https://mogeko.github.io/userscripts/douban2rarbg.meta.js",
        grant: "none",
      },
    }),
  ],

  // Vitest config
  define: { "import.meta.vitest": "undefined" },
  test: {
    includeSource: ["src/**/*.{js,ts}"],
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
