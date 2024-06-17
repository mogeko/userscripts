import fs from "node:fs/promises";
import path from "node:path";
import pkg from "../package.json";

const releasePath = path.resolve(__dirname, "../release");
const releaseFiles = await fs.readdir(releasePath);
const baseURL = process.env.BASE_URL || "https://mogeko.github.io/userscripts";

const meta = {
  name: pkg.name,
  description: pkg.description,
  homepage: pkg.homepage,
  author: pkg.author,
  license: pkg.license,
  resource: releaseFiles
    .filter((file) => !file.endsWith("index.json"))
    .map((file) => [baseURL, file].join("/")),
  packer: "https://www.npmjs.com/package/vite",
  env: {
    NODE_VERSION: process.version,
    RUNNER_OS: process.env.RUNNER_OS,
    RUNNER_ARCH: process.env.RUNNER_ARCH,
  },
  date: new Date(Date.now()).toISOString(),
};

await fs.writeFile(
  path.resolve(__dirname, "../release/index.json"),
  JSON.stringify(meta, null, 2)
);
