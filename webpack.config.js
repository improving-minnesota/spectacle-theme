const path = require('path');

module.exports = function config() {
  return {
    devtool: 'source-map',
    entry: {
      components: path.join(__dirname, 'src/components'),
      'create-theme': path.join(__dirname, 'src/index')
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, 'dist'),
      libraryTarget: 'umd'
    },
    externals: [/react/i, /radium/i],
    module: {
      rules: [
        {
          test: /\.js$/,
          loaders: ['babel-loader'],
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.svg|png|jpe?g|gif$/,
          loaders: ['url-loader'],
          include: path.join(__dirname, 'src')
        }
      ]
    }
  };
};
