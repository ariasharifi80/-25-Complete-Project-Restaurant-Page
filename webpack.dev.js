// webpack.dev.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: './dist',
    watchFiles: ['./src/template.html'],
    open: true, // optional: auto-open browser
    port: 3000, // optional
  },
});