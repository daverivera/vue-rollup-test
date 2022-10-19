const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  optimization: {
    usedExports: true,
    innerGraph: true,
    sideEffects: true,
  },
  resolve: {
      modules: [
                  path.resolve(__dirname, './src'),
              ]
  },
  devtool: false,
  module: {
    rules: [
      {
          test: /\.vue$/,
          loader: 'vue-loader',
      },
            {
                test: /\.(ts|js)?$/,
              include: [
                path.resolve(__dirname, './src/')
              ],
                exclude: [/node_modules/],
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  },
                  {
                      loader: 'ts-loader',
                      options: {
                          appendTsSuffixTo: [/\.vue$/], // Process .vue files
                          transpileOnly: true,
                          configFile: require.resolve('./tsconfig.json'),
                      },
                  }
                ],
                //loader: 'ts-loader',
                //options: {
                    //appendTsSuffixTo: [/\.vue$/], // Process .vue files
                    //transpileOnly: true,
                    //configFile: require.resolve('./tsconfig.json'),
                //},
            },
            {
                test: /\.(scss|css)$/,
                use: ['vue-style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
    ]
  },
    plugins: [
        //new HtmlWebpackPlugin({
            //template: './index.ejs'
        //}),
 
        new VueLoaderPlugin(),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                extensions: {
                    vue: {
                        enabled: true,
                        compiler: 'vue-template-compiler',
                    },
                },
            },
        }),
    ],
};
