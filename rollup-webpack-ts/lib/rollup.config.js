import vue from 'rollup-plugin-vue2';
import cleaner from 'rollup-plugin-cleaner';
import bundleScss from 'rollup-plugin-bundle-scss';
import ts from "rollup-plugin-typescript2";
import { terser } from 'rollup-plugin-terser';

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
    // terser({
    // // remove all comments
    //     format: {
    //       comments: false
    //     },
    // // prevent any compression
    //     compress: false
    // }),
    ts({
      tsconfig: "tsconfig.json"
    }),
    vue(),
  ],
};
