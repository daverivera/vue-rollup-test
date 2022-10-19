const buildPresets = [
  [
    '@babel/preset-env',
    // Config for @babel/preset-env
    {
      // modules: true,
      // Example: Always transpile optional chaining/nullish coalescing
      // include: [
      //   /(optional-chaining|nullish-coalescing)/
      // ],
      targets: {
        node: 'current'
      }
    },
  ],
  '@babel/preset-typescript',
];

module.exports = {
  presets: buildPresets,
};
