import { copyFile, mkdir } from "node:fs/promises";
import { basename, resolve } from "node:path";
import pkg from "../package.json";

const baseURL = import.meta.env.BASE_URL || "https://userscripts.mogeko.me";
const glob = new Bun.Glob("packages/!_*/dist/*.js");
const releaseDir = resolve(import.meta.dir, "../release");
const releaseFiles = [];

await mkdir(releaseDir, { recursive: true });

for await (const file of glob.scan(".")) {
  await copyFile(file, resolve(releaseDir, basename(file)));

  releaseFiles.push([baseURL, basename(file)].join("/"));
}

const meta = {
  name: pkg.name,
  description: pkg.description,
  homepage: pkg.homepage,
  author: pkg.author,
  license: pkg.license,
  resource: releaseFiles,
  packer: "https://www.npmjs.com/package/vite",
  env: {
    BUN_VERSION: Bun.version,
    RUNNER_OS: import.meta.env.RUNNER_OS,
    RUNNER_ARCH: import.meta.env.RUNNER_ARCH,
  },
  date: new Date(Date.now()).toISOString(),
};

await Bun.write(
  resolve(import.meta.dir, "../release/index.json"),
  JSON.stringify(meta, null, 2),
);
