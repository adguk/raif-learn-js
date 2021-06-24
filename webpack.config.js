const path = require('path');

module.exports = {
  entry: './js/getData.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    watchContentBase: true,
  }
};