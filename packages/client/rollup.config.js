import { defineConfig } from "rollup";
import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default defineConfig({
  input: "./src/index.ts",
  output: [
    {
      file: "./lib/client.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "./lib/client.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["axios"],
  plugins: [
    nodeResolve(),
    typescript({
      useTsconfigDeclarationDir: true,
    }),
    commonjs(),
  ],
});
