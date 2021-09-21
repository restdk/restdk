import { defineConfig } from "rollup";
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default defineConfig({
  input: "./src/index.ts",
  output: [
    {
      file: "./lib/core.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "./lib/core.esm.js",
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
