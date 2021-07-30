const path = require('path');
const webpack = require('webpack');

module.exports = {
  // root of bundle and beginning of dependency graph
  entry: './assets/js/script.js',
  // output bundled code from entry and place into 'dist/main.bundle.js'
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  // bundle code using development mode
  mode: 'development'
};