const merge = require('lodash/merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'production',

  output: {
    filename: '[name].[hash].js'
  },

  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin()]
  },

  devtool: 'source-map'
});
