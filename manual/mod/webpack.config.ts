import path from 'path';
import { Configuration, WebpackPluginInstance } from 'webpack';
 
import 'webpack-dev-server';
 
 
const baseConfig: Configuration = {
    mode: 'development',
    //mode: 'production',
    //devtool: 'inline-source-map',
    devtool: false,
    entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: [/node_modules/],
                //loader: 'ts-loader',
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
                          transpileOnly: true,
                          configFile: require.resolve('./tsconfig.json'),
                      },
                  }
                ],
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
    },
    optimization: {
        usedExports: true,
        innerGraph: true,
        sideEffects: true,
        //mangleExports: 'deterministic',
    },
};

export default baseConfig;
