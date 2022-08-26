import metablock from "rollup-plugin-userscript-metablock";
import swc from "rollup-plugin-swc";
import path from "path";

const pkg = require("./package.json");

export default {
  input: path.resolve(__dirname, "src/main.ts"),
  output: {
    file: path.resolve("../..", `dist/${pkg.name}.user.js`),
    format: "iife",
  },
  plugins: [
    swc({
      jsc: {
        parser: {
          syntax: "typescript",
        },
        target: "es5",
      },
    }),
    metablock({
      override: {
        author: pkg.author,
        description: pkg.description,
        license: pkg.license,
        version: pkg.version,
      },
    }),
  ],
};
