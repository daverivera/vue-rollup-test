import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import renameExtension from '@betit/rollup-plugin-rename-extensions';
import resolve from '@rollup/plugin-node-resolve';
import cleaner from 'rollup-plugin-cleaner';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-only'
//import babel from '@rollup/plugin-babel';

export default {
  //input: 'src/index.ts',
  input: 'src/App.vue',
  output: {
    file: 'dist/index.js',
    //format: 'cjs'
    format: 'esm',
    //exports: 'named',
    //globals: {
      //vue: 'Vue',
    //},
  },
  external: ['vue'],
  plugins: [
    //cleaner({ targets: ['dist'] }),
    //css(),
    //commonjs(),
    //typescript({
      //tsconfig: './tsconfig.json',
      //check: false,
      ////clean: true,
    //}),
    vue({
  
      //target: 'browser',
      //compileTemplate: true,
      //preprocessStyles: true,


      css: true
    }),
    //renameExtension({
      //include: ['**/*.ts', '**/*.vue'] ,
      //mappings: { '.vue': 'vue.js', '.ts': '.js' },
    //}),
    //[
      //resolve({
        //extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      //}),
      //commonjs(),
    //],
    //babel({
      //exclude: 'node_modules/**',
      //extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      //babelHelpers: 'bundled',
    //}),
  ],
  preserveModules: true
};
