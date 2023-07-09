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
        namespace: "https://mogeko.me",
        supportURL: "https://github.com/mogeko/userscripts/issues",
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
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
});
