import path from 'path';
import { Configuration, WebpackPluginInstance } from 'webpack';
 
import 'webpack-dev-server';
 
 
const baseConfig: Configuration = {
    mode: 'production',
    devtool: false,
    entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: [/node_modules/],
                loader: 'ts-loader',
                options: {
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
        library: 'esm',
        clean: true,
    },
    resolve: {
        alias: {
        },
        extensions: ['*', '.js', '.ts'],
        modules: ['src', 'node_modules']
    }
};

export default baseConfig;
