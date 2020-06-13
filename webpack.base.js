const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const root = (...paths) => path.resolve(__dirname, ...paths);
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: root('src', 'main.ts'),

  output: {
    path: root('dist')
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      },

      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.ts'],
    alias: {
      '@scss': root('scss')
    }
  },

  optimization: {
    runtimeChunk: {name: 'runtime'}
  },

  target: 'web',

  plugins: [
    new HtmlWebpackPlugin({template: root('src', 'index.html')}),
    new MiniCssExtractPlugin({filename: devMode ? '[name].css' : '[name].[hash].css'})
  ]
};
