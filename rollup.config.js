const pkg = require('./package.json');

const output = {
  name: pkg.name
    .split('-')
    .map((v) => v.slice(0, 1).toUpperCase() + v.slice(1))
    .join(''),
  format: 'umd',
  banner: `/**\n * @author ${pkg.author.name}\n * @version ${pkg.version}\n * @name ${pkg.name}\n */`
};

const createConfig = (isProd) => {
  return {
    input: 'index.js',
    output: {
      ...output,
      compact: isProd,
      file: pkg.main.replace(isProd ? '' : '.min', '')
    }
  };
};

module.exports = [
  createConfig(false),
  createConfig(true)
];
