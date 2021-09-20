// Copyright (c) 2021 wmc
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const fs = require("fs");
const path = require("path");

function main(packageName) {
  const baseUrl = path.resolve(".");
  const packagePath = path.join(baseUrl, `packages/${packageName}`);
  const configDir = path.join(baseUrl, "scripts/config-template");
  const files = fs.readdirSync(configDir);

  files.forEach((fileName) => {
    const filePath = path.join(configDir, fileName);
    const packageFilePath = path.join(packagePath, fileName);
    console.log({ filePath, packageFilePath });
    let config = fs.readFileSync(filePath, { encoding: "utf-8" });
    config = eval("`" + config.replace(/`/gim, "\\`") + "`");
    fs.writeFileSync(packageFilePath, config);
  });
}

main(...process.argv.slice(2));
