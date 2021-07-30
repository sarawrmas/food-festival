const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  // root of bundle and beginning of dependency graph
  entry: {
    app: "./assets/js/script.js",
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js"
  },
  // output bundled code from entry and place into "dist/main.bundle.js"
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.jpg$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name (file) {
                return "[path][name].[ext]"
              },
              publicPath: function(url) {
                return url.replace("../", "/assets/")
              }
            }
          },
          {
            loader: "image-webpack-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new BundleAnalyzerPlugin({
      // report outputs to an HTML file in the dist folder
      analyzerMode: "static"
    })
  ],
  // bundle code using development mode
  mode: "development"
};