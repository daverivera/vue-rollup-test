import typescript from 'rollup-plugin-typescript'
import vue from '@vitejs/plugin-vue'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  external: ['vue'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      //experimentalDecorators: true,
      //module: 'es2015'
    }),
    vue(),
  ]
};
