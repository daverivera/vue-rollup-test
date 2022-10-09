import typescript from '@rollup/plugin-typescript'
//import vue from 'rollup-plugin-vue2';
import scss from 'rollup-plugin-scss';
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    //format: 'cjs'
    format: 'esm'
  },
  external: ['vue'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      //experimentalDecorators: true,
      //module: 'es2015'
    }),
    scss(),
    vue({
      //compileTemplate: true,
      compiler: require('@vue/compiler-sfc'),
      css: true, 
      compileTemplate: true,
      //css: false,
      defaultLang: { 
        script: 'ts' ,
        style: 'sccss'
      },
    }),
  ]
};
