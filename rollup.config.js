import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';
import PeerDepsExternalPlugin from 'rollup-plugin-peer-deps-external';

const env = process.env.NODE_ENV;

export default [
  {
    input: pkg.source,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      PeerDepsExternalPlugin(),
      external({ includeDependencies: true }),
      resolve(),
      babel({
        babelHelpers: 'bundled',
        babelrc: true,
        exclude: 'node_modules/**',
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      image({
        extensions: /\.(png|jpg|jpeg|gif|svg)$/,
        limit: 10000,
      }),
      typescript({ tsconfig: './tsconfig.json', module: 'ESNext' }),
      commonjs(),
      del({ targets: ['dist/*'] }),
      env === 'production' && terser(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
  // {
  // path to your declaration files root
  // input: './dist/dts/index.d.ts',
  // output: [{ file: 'dist/index.d.ts', format: 'es' }],
  // plugins: [dts()],
  // },
];
