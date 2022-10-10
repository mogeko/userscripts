import rollupBuild from "../../scripts/build";

const pkg = require("./package.json");

export default rollupBuild({
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
