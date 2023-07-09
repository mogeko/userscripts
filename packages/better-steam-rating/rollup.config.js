import { rollupBuilder } from "../../scripts/rollup-builder.mjs";

const pkg = require("./package.json");

export default rollupBuilder({
  mainFile: `${__dirname}/src/main.js`,
  swcConfig: {
    jsc: { target: "es5" },
  },
  metablockConfig: {
    override: {
      description: pkg.description,
      license: pkg.license,
      version: pkg.version,
    },
  },
});
