import {nodeResolve} from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import includePaths from 'rollup-plugin-includepaths';

export default {
  input: './esm/index.js',
  plugins: [
    includePaths({
      include: {
        '@ungap/create-content': 'node_modules/@ungap/degap/create-content.js',
        '@ungap/custom-elements': 'node_modules/@ungap/degap/custom-elements.js'
      },
    }),
    nodeResolve(),
    terser()
  ],
  
  output: {
    exports: 'named',
    file: './es.js',
    format: 'iife'
  }
};
