const WebpackMerge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = WebpackMerge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 666
  }
});