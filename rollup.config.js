import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import builtins from "rollup-plugin-node-builtins";
import clear from "rollup-plugin-clear";
import terser from '@rollup/plugin-terser';
import ssxPlugin from "rollup-ssxc-loader";
import watchGlobs from "rollup-plugin-watch-globs";

const outputDir = "./public/js/";

const getPluginsConfig = (prod, mini) => {
    const sortie = [
        
    watchGlobs([
        'src/**/*.*',
      ]),
        ssxPlugin(),
        clear({
            targets: [`${outputDir}esm`, `${outputDir}system`],
            watch: true,
        }),

        nodeResolve({
            jsnext: true,
            browser: true,
            preferBuiltins: false,
        }),
        commonjs(),

        builtins(),
    ];
    if (mini) {
        sortie.push(
            terser({
                compress: {
                    unused: false,
                    collapse_vars: false,
                },
                output: {
                    comments: !prod,
                }
            })
        );
    }
    return sortie;
};

export default CLIArgs => {
    const prod = !!CLIArgs.prod;
    const mini = !!CLIArgs.mini;
    const bundle = {
        input: ["./src/index.js"],
        output: [
            {
                dir: `${outputDir}esm/`,
                format: "esm"
            },
        ],
    };
    bundle.plugins = getPluginsConfig(prod, mini);
    return bundle;
};
