//import typescript from '@rollup/plugin-typescript'
import typescript from 'rollup-plugin-typescript2';
//import vue from 'rollup-plugin-vue2';
import scss from 'rollup-plugin-scss';
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    //format: 'cjs'
    format: 'esm',
    exports: 'named',
  },
  external: ['vue'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      //useTsconfigDeclarationDir: true,
      //emitDeclarationOnly: true,
      //experimentalDecorators: true,
      //module: 'ES2020'
    }),
    //scss(),
    vue({
      css: true,
      //template: {
        //isProduction: true,
        //compileTemplate: true,
        //compiler: require('@vue/compiler-sfc'),
      //},
      defaultLang: { 
        script: 'ts' ,
        style: 'scss'
      },
    }),
  ]
};
