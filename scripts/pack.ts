import fs from "node:fs/promises";
import path from "node:path";
import { glob } from "glob";
import pkg from "../package.json";

const baseURL = process.env.BASE_URL || "https://userscripts.mogeko.me";
const releaseDir = path.resolve(__dirname, "../release");
const releaseFiles = await glob("packages/*/dist/*.js", { ignore: "*/_*/**" });

await fs.mkdir(releaseDir, { recursive: true });

for (const file of releaseFiles) {
  await fs.copyFile(file, path.resolve(releaseDir, path.basename(file)));
}

const meta = {
  name: pkg.name,
  description: pkg.description,
  homepage: pkg.homepage,
  author: pkg.author,
  license: pkg.license,
  resource: releaseFiles.map((file) => {
    return [baseURL, path.basename(file)].join("/");
  }),
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
  JSON.stringify(meta, null, 2),
);
