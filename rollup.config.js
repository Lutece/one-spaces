const pkg = require('./package.json');
const typescript = require('rollup-plugin-typescript2');

const createConfig = (isNode) => {
  return {
    input: 'src/index.ts',
    output: {
      banner: `/**\n * @author ${pkg.author.name}\n * @version ${pkg.version}\n * @name ${pkg.name}\n */`,
      compact: isNode,
      format: isNode ? 'cjs' : 'iife',
      file: isNode ? pkg.main : `dist/${pkg.name}.js`,
      name: pkg.name.split('-').map((v) => v.slice(0, 1).toUpperCase() + v.slice(1)).join(''),
    },
    plugins: [
      typescript({ clean: true }),
    ].filter(Boolean)
  };
};

module.exports = [
  createConfig(false),
  createConfig(true)
];
