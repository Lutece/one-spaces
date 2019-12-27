const pkg = require('./package.json');
const {terser} = require('rollup-plugin-terser');

const createConfig = (isNode) => {
  return {
    input: 'src/index.js',
    output: {
      banner: `/**\n * @author ${pkg.author.name}\n * @version ${pkg.version}\n * @name ${pkg.name}\n */`,
      compact: !isNode,
      strict : isNode,
      format: isNode ? 'cjs' : 'iife',
      file: isNode ? pkg.main : `dist/${pkg.name}.js`,
      name: pkg.name.split('-').map((v) => v.slice(0, 1).toUpperCase() + v.slice(1)).join(''),
    },
    plugins: [
      isNode ? null : terser()
    ].filter(Boolean)
  };
};

module.exports = [
  createConfig(false),
  createConfig(true)
];
