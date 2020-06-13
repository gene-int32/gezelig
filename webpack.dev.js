const path = require('path');
const merge = require('lodash/merge');
const baseConfig = require('./webpack.base');

const root = (...paths) => path.resolve(__dirname, ...paths);

module.exports = merge(baseConfig, {
  mode: 'development',

  output: {
    filename: '[name].js'
  },

  devtool: 'cheap-source-map',

  devServer: {
    contentBase: root('dist'),
    compress: true,
    port: 4200
  }
});
