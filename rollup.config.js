import run from '@rollup/plugin-run';

const dev = process.env.ROLLUP_WATCH === 'true';

export default {
    input: 'src/app.js',
    output: {
        file: 'dist/app.js',
        format: 'cjs',
        sourcemap: true,
    },
    plugins: [
        dev && run({
            execArgv: [
                '-r',
                'source-map-support/register',
            ],
        }),
    ],
};
