var webpack = require('webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: [
    //'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './client.js',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devtool: '#source-map',
  plugins: [
    new ErrorOverlayPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
