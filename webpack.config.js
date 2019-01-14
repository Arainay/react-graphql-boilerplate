const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputPath = path.resolve(__dirname, './dist');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: outputPath,
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /dist/],
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/assets/index.html'),
      filename: 'index.html',
      path: outputPath
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: outputPath,
    port: 3000,
    historyApiFallback: true,
    inline: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: false,
    disableHostCheck: true
  }
};
