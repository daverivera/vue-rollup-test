import path from 'path';
import { Configuration, WebpackPluginInstance } from 'webpack';
//import HtmlWebpackPlugin from 'html-webpack-plugin';
 
 
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
                test: /\.(ts|js)?$/,
                exclude: [/node_modules/],
                loader: 'ts-loader',
                options: {
                    //appendTsSuffixTo: [/\.vue$/], // Process .vue files
                    transpileOnly: true,
                    configFile: require.resolve('./tsconfig.json'),
                },
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        //library: 'umd',
        clean: true,
    },
    resolve: {
        alias: {
            // vue$: 'vue/dist/vue.esm.js',
        },
        extensions: ['*', '.js', '.ts'],
        modules: ['src', 'node_modules']
    },
    optimization: {
        usedExports: true,
        innerGraph: true,
        sideEffects: true,
        //mangleExports: 'deterministic',
    },
    devServer: {
        port: 3000,
    //     historyApiFallback: {
    //         index: 'index.html'
    //     }
    },
    plugins: [
        //new HtmlWebpackPlugin({
            //template: './index.ejs'
        //}),
    ],
};

export default baseConfig;
