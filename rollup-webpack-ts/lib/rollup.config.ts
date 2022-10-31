import vue from 'rollup-plugin-vue';
import cleaner from 'rollup-plugin-cleaner';
import bundleScss from 'rollup-plugin-bundle-scss';
import ts from "rollup-plugin-ts";

export default {
  input: 'src/index.ts',
  output: {
    format: 'esm',
    file: 'dist/index.esm.js',
    // Prevents bundling, but doesn’t rename files
    // preserveModules: true
  },
  external: ['vue'],
  plugins: [
    cleaner({ targets: ['dist'] }),
    bundleScss(),
    ts({
      tsconfig: "tsconfig.json"
    }),
    vue(),
  ],
};
