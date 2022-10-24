# Tree Shaking

The project contains a list of folders of tests containing

* The same app & lib code with a different bundler per folder group
* The first name is the lib bundler and second is the app/consumer bundler
  * `rollup-webpack`: *Lib* is build with **Rollup** and the *app* is built with **Webpack**
* Each group uses NPM **workspaces**

Goal: Build a tree-shakeable Vue component library and tree-shake it in a consuming Vue app.

Verification: Compile `app` in production mode (Webpack) or dev mode (Rollup/Vite) and verify the output file inside `app/dist` does not contain `ds-switch` anywhere in the bundled output. 

### Pair of experiments

| Library                    | Application | 
|----------------------------|-------------|
| Webpack                    | Webpack     |
| Rollup                     | Webpack     |
| Vite                       | Webpack     | 
| Webpack                    | Rollup      |
| Rollup                     | Rollup      |
| Vite                       | Rollup      |
| Webpack                    | Vite        |
| Rollup                     | Vite        |
| Webpack                    | Vite        |

### Additional experiments

* **webpacksfc-vite**: This build purpose is to try the lastest Vue Compiler to experiment with the different type of build output and attempt to tree-shake it with Vite to verify if it could be tree-shaken with Webpack library build somehow. 

* **manual**: Create a consuming app that would test tree-shaking with a TS functions library and a Vue component library.

> See the section **"Aditional Experiments"** at the bottom for details on how to use these two experiments.

## Install
Each group requires to be installed individually:

```bash
$ cd rollup-vite
$ npm run install
```

## Build

### Build library

Builds the library and creates a bundled file inside `lib/dist`. In some cases multiple packages will be build in the form of UMD, ESM & CJS bundles, but not with every group.

```bash
$ cd rollup-vite
$ npm run lib
```

### Build app

Builds the consuming application and creates a bundled file inside `app/dist`.
 
```bash
$ cd rollup-vite
$ npm run app
```

**Webpack clients:**
> In all webpack cases it allows to build in production mode too with

```bash
$ npm run prod -w app
```

## Additional Experiments

### `manual`

The `manual` folder contains 3 folders:

* **app**: Consuming app which can compile in **Webpack**
  * **Webpack**: `npm run build`
  * **Production**: `npm run prod`
* **comps**: Vue component library that can be compiled in **Webpack**
  * **Webpack**: `npm run build`
* **funcs**: Simple TS functions library. Used to demonstrate that normal JS functions get tree-shook by Webpack but not Vue library components. Can be compiled in **Webpack** & **Rollup**
  * **Wepack**: `npm run build`
  * **Rollup**: `npm run build1`

Build all packages:

```bash
$ cd manual
$ npm run build
```

1. The folder `app` consumes code from `funcs` and `comps`.
2. `funcs` gets tree-shaken (Webpack bundle) by `app`, but `comps` does **not** with any bundler on either side.
3. If using a different type of `funcs` build than the defined in `package.json`, use the full route in the `import` statement or change the `main` file inside the `package.json` file to the desired bundled file (i.e `dist/index.js`)

#### `webpacksfc-vite`

Uses latest version of (vue-loader)[https://www.npmjs.com/package/vue-loader/v/15.10.0-beta.6] that allows **Vue 2.7.x** support, which is the `15.10.0-beta.6`.

