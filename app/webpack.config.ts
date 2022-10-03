import path from 'path';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import { Configuration, WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
 
 
import 'webpack-dev-server';
 
 
const baseConfig: Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
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
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/], // Process .vue files
                    transpileOnly: true,
                    configFile: require.resolve('./tsconfig.json'),
                },
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
        filename: '[name].bundle.js',
        library: 'umd',
        clean: true,
    },
    resolve: {
        alias: {
            // vue$: 'vue/dist/vue.esm.js',
        },
        extensions: ['*', '.vue', '.js', '.ts'],
        modules: ['src', 'node_modules']
    },
    optimization: {
        providedExports: true,
        usedExports: true,
    },
    devServer: {
        port: 3000,
    //     historyApiFallback: {
    //         index: 'index.html'
    //     }
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
