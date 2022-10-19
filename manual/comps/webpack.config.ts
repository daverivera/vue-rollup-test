// @ts-ignore
// @ts-nocheck
import * as path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import { Configuration, WebpackPluginInstance } from 'webpack';

import 'webpack-dev-server';

const baseConfig: Configuration = {
    mode: 'development',
    devtool: false,
    entry: {
      //index: path.resolve(__dirname, 'index.ts'),
      index: './src/index.ts'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    resolve: {
        alias: {
             vue$: 'vue/dist/vue.esm.js',
        },
        extensions: ['*', '.vue', '.js', '.ts'],
        modules: ['src', 'node_modules']
    },
    optimization: {
        usedExports: true,
        innerGraph: true,
        sideEffects: true,
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(ts|js)?$/,
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
        ],
    },
    externals: ['vue'],
    plugins: [
        new VueLoaderPlugin() as WebpackPluginInstance,
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

export default baseConfig;
