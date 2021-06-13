import resolve from '@rollup/plugin-node-resolve';
import derver from 'derver/rollup-plugin';
import malina from 'malinajs/malina-rollup'
import css from 'rollup-plugin-css-only';

const DEV = !!process.env.ROLLUP_WATCH;
let cssInJS = true;  // uncomment bundle.css in index.html

export default {
    preserveEntrySignatures: false,
    input: 'src/main.js',
    output: {
        dir: 'public/',
        format: 'amd',
    },
    plugins: [
        malina({
            hideLabel: !DEV,
            css: cssInJS
        }),
        resolve(),
        DEV && derver(),
        !cssInJS && css({ output: 'bundle.css' })
    ],
    watch: {
        clearScreen: false
    }
}