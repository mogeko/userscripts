const argv = require("minimist")(process.argv.slice(2));
const fs = require("fs").promises;
const path = require("path");

async function main() {
  const pkg = require(path.resolve(__dirname, "../package.json"));
  const release_path = path.resolve(__dirname, "../release");
  const release_files = await fs.readdir(release_path);
  const base_url = argv.base_url ?? "https://mogeko.github.io/userscripts";

  fs.writeFile(
    path.resolve(__dirname, "../release/index.json"),
    JSON.stringify({
      name: pkg.name,
      description: pkg.description,
      homepage: pkg.homepage,
      author: pkg.author,
      license: pkg.license,
      resource: release_files.map((file) => `${base_url}/${file}`),
      packer: "https://www.npmjs.com/package/rollup",
      env: {
        NODE_VERSION: process.version,
        RUNNER_OS: process.env.RUNNER_OS,
        RUNNER_ARCH: process.env.RUNNER_ARCH,
      },
      date: new Date(Date.now()).toISOString(),
    })
  );
}

main();
