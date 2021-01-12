import resolve from 'rollup-plugin-node-resolve'
// import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

export default {
    input: 'lib/index.ts',
    output: [
        {
            file: 'dist/func.js',
            name: 'Func',
            format: 'iife'  // iife 表示立即执行函数
        },
        {
            format: 'esm',
            file: 'dist/func.esm.js'
        },
        {
            format: 'umd',
            file: 'dist/func.umd.js',
            name: 'Func'
        },
        {
            format: 'amd',
            file: 'dist/func.amd.js',
            name: 'Func'
        },
        {
            format: 'cjs',
            file: 'dist/func.cjs.js',
            name: 'Func'
        }
    ],
    plugins: [
        resolve(),
        // babel({
        //     exclude: 'node_modules/**'
        // }),
        uglify()
    ]
}