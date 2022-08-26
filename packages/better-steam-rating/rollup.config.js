import metablock from "rollup-plugin-userscript-metablock";
import swc from "rollup-plugin-swc";
import path from "path";

const pkg = require("./package.json");

export default {
  input: path.resolve(__dirname, "src/main.js"),
  output: {
    file: path.resolve("../..", `release/${pkg.name}.user.js`),
    format: "iife",
  },
  plugins: [
    swc({
      jsc: {
        target: "es5",
      },
    }),
    metablock({
      override: {
        description: pkg.description,
        license: pkg.license,
        version: pkg.version,
      },
    }),
  ],
};
