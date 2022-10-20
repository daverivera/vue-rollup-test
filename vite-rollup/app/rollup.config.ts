// @ts-ignore
// @ts-nocheck
import vue from 'rollup-plugin-vue2'
import node from '@rollup/plugin-node-resolve'
import cjs from '@rollup/plugin-commonjs'
import {babel} from "@rollup/plugin-babel";

import typescript from '@rollup/plugin-typescript'
import bundleScss from 'rollup-plugin-bundle-scss';

import fs from 'fs'
import path from 'path'

console.log(babel)

const baseFolder = './src'

const components = fs
    .readdirSync(baseFolder)
    .filter((f) =>
        fs.statSync(path.join(baseFolder, f)).isDirectory()
    )

const entries = {
    'index': './src/index.ts',
    // 'helpers': './src/utils/helpers.ts',
    // 'config': './src/utils/config.ts',
    // ...components.reduce((obj, name) => {
    //     obj[name] = (baseFolder + '/' + name + '.vue')
    //     return obj
    // }, {})
}

const babelOptions = {
    babelHelpers: 'bundled'
}

const vuePluginConfig = {
    template: {
        isProduction: true,
        compilerOptions: {
            whitespace: 'condense'
        }
    },
    defaultLang: { 
        script: 'ts' ,
        style: 'scss'
    },
}

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export default () => {
    let config = [
        {
            input: entries,
            external: ['vue'],
            output: {
                format: 'esm',
                dir: `dist/esm`,
                entryFileNames: '[name].mjs',
                chunkFileNames: '[name]-[hash].mjs',
            },
            plugins: [
                node({
                    extensions: ['.vue', '.ts']
                }),
                typescript(),
                bundleScss(),
                vue(vuePluginConfig),
                babel(babelOptions),
                cjs()
            ]
        },
        {
            input: entries,
            external: ['vue'],
            output: {
                format: 'cjs',
                dir: 'dist/cjs',
                exports: 'named'
            },
            plugins: [
                node({
                    extensions: ['.vue', '.ts']
                }),
                typescript(),
                bundleScss(),
                vue(vuePluginConfig),
                babel(babelOptions),
                cjs()
            ]
        },
        {
            input: 'src/index.ts',
            external: ['vue'],
            output: {
                format: 'umd',
                name: capitalize('lib'),
                file: 'dist/lib.js',
                exports: 'named',
                // banner: bannerTxt,
                globals: {
                    vue: 'Vue'
                }
            },
            plugins: [
                node({
                    extensions: ['.vue', '.ts']
                }),
                typescript(),
                bundleScss(),
                vue(vuePluginConfig),
                babel(babelOptions),
                cjs()
            ]
        },
        {
            input: 'src/index.ts',
            external: ['vue'],
            output: {
                format: 'esm',
                file: 'dist/lib.mjs',
                // banner: bannerTxt
            },
            plugins: [
                node({
                    extensions: ['.vue', '.ts']
                }),
                typescript(),
                bundleScss(),
                vue(vuePluginConfig),
                babel(babelOptions),
                cjs()
            ]
        }
    ]

    return config
}