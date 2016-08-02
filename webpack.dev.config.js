const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src/index',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    pathInfo: true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass'],
      },
    ],
  },
  resolve: {
    root: path.join(__dirname, ''),
    modulesDirectories: [
      'node_modules',
    ],
    extensions: ['', '.js'],
  },
  target: 'web',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
};
