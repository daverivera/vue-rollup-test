import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    //format: 'cjs'
    format: 'esm',
    exports: 'named',
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
    //babel({
      //exclude: 'node_modules/**',
      //extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      //babelHelpers: 'bundled',
    //}),
  ]
};
