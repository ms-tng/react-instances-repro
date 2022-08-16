import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
    external: ['react', 'react-bootstrap/button', 'react-dom/client'],
    input: 'src/index.tsx',
    output: {
        file: 'dist/index.js',
        format: 'esm'
    },
    plugins: [
        typescript(),
        resolve(),
        commonjs()
    ],
}