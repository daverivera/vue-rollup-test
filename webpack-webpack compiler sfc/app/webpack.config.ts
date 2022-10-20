// @ts-ignore
// @ts-nocheck
import path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import { Configuration, WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
 
 
import 'webpack-dev-server';
 
 
const baseConfig: Configuration = {
    mode: 'development',
    //mode: 'production',
    //devtool: 'inline-source-map',
    devtool: false,
    entry: {
        // index: './src/index.ts',
        index: path.resolve(__dirname, 'src/index.ts'),
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
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        //library: 'esm',
        filename: '[name].bundle.js',
        //library: {
          //type: 'module'
        //},
        //library: 'umd',
        clean: true,
    },
    //experiments: {
      //outputModule: true,
    //},
    resolve: {
        alias: {
             vue$: 'vue/dist/vue.esm.js',
        },
        extensions: ['*', '.vue', '.js', '.ts'],
        modules: ['src', 'node_modules']
    },
    optimization: {
        //providedExports: true,
        usedExports: true,
        innerGraph: true,
        sideEffects: true,
        //mangleExports: 'deterministic',
        //minimize: true,
        //minimizer: [new TerserPlugin()],
    },
    devServer: {
        port: 3000,
         //historyApiFallback: {
             //index: 'index.html'
         //}
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.ejs'
        }),
 
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
