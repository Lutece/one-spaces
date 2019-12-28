const pkg = require('./package.json');
const {terser} = require('rollup-plugin-terser');

const createConfig = (format) => {
  const isBrowser = (format === 'iife');
  return {
    input: 'src/index.js',
    output: {
      banner: `/**\n * @author ${pkg.author.name}\n * @version ${pkg.version}\n * @name ${pkg.name}\n */`,
      compact: isBrowser,
      strict : !isBrowser,
      format: format,
      file: isBrowser ? `dist/${pkg.name}.js` : pkg.main,
      name: pkg.name.split('-').map((v) => v.slice(0, 1).toUpperCase() + v.slice(1)).join(''),
    },
    plugins: [
      isBrowser ? terser() : null
    ].filter(Boolean)
  };
};

module.exports = [
  createConfig('esm'),
  createConfig('iife')
];
