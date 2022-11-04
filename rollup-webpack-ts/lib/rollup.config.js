import vue from 'rollup-plugin-vue2';
import cleaner from 'rollup-plugin-cleaner';
import ts from "rollup-plugin-typescript2";
import cleanup from 'rollup-plugin-cleanup';
import postcss from 'rollup-plugin-postcss';
import path from 'path';

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
    cleanup({ comments: "none", extensions: ["js", "ts", "vue"] }),
    ts(),
    vue({
      css: false
    }),
    postcss({
      use: [
        ['sass', {
          includePaths: [path.join(__dirname, 'src')],
          data: "@import 'utils/scss/mixins';"
        }]
      ]
    })
  ],
};
