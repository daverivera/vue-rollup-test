import vue from 'rollup-plugin-vue2';
import cleaner from 'rollup-plugin-cleaner';
import bundleScss from 'rollup-plugin-bundle-scss';
import ts from "rollup-plugin-typescript2";
import cleanup from 'rollup-plugin-cleanup';

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
    cleanup({ comments: "none", extensions: ["js", "ts", "vue"] }),
    ts({
      tsconfig: "tsconfig.json"
    }),
    vue(),
  ],
};
