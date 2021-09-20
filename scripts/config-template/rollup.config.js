import { defineConfig } from "rollup";
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default defineConfig({
  input: "./src/index.ts",
  output: [
    {
      file: "./lib/${packageName}.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "./lib/${packageName}.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
  ],
});
