import vue from 'rollup-plugin-vue';
import cleaner from 'rollup-plugin-cleaner';
import bundleScss from 'rollup-plugin-bundle-scss';

export default {
  input: 'src/index.js',
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
    vue(),
  ],
};
