import metablock from "rollup-plugin-userscript-metablock";
import swc from "rollup-plugin-swc";
import path from "path";

/**
 *
 * @typedef {Parameters<swc>[0]} SWCConfig
 * @typedef {Parameters<metablock>[0]} MetablockConfig
 * @param {{mainFile: string, outFile: string,
 *          swcConfig: SWCConfig, metablockConfig: MetablockConfig}} opt
 * @returns {{input: string,
 *  output: {file: string, format: string},
 *  plugins: [ReturnType<swc>, ReturnType<metablock>]
 * }}
 */
function rollupBuild(opt = {}) {
  const pkg = require(`${path.resolve(__dirname)}/package.json`);
  const swcConfig = opt.swcConfig ?? {
    jsc: {
      parser: { syntax: "typescript" },
      target: "es5",
    },
  };
  const metablockConfig = opt.metablockConfig ?? {
    override: {
      author: pkg.author,
      description: pkg.description,
      license: pkg.license,
      version: pkg.version,
    },
  };

  return {
    input: path.resolve(opt.mainFile ?? `${__dirname}/src/main.ts`),
    output: {
      file: path.resolve(opt.outFile ?? `../../release/${pkg.name}.user.js`),
      format: "iife",
    },
    plugins: [swc(swcConfig), metablock(metablockConfig)],
  };
}

export default rollupBuild;
