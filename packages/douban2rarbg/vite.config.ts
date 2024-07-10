import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

const baseURL = process.env["BASE_URL"] || "https://userscripts.mogeko.me";

export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      build: { metaFileName: true },
      server: { mountGmApi: true },
      userscript: {
        name: "Douban2RARBG",
        namespace: "https://mogeko.me",
        icon: "https://besticon.herokuapp.com/icon?size=80..120..200&url=douban.com",
        downloadURL: [baseURL, "douban2rarbg.user.js"].join("/"),
        updateURL: [baseURL, "douban2rarbg.meta.js"].join("/"),
        match: "https://movie.douban.com/subject/*",
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
