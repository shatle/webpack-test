var path = require("path");
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var webpack = require("webpack");
module.exports = {
  entry: {
    first: ['./first.js'],
    second: ['./second.js'],
  },
  output: {
    path: path.join(__dirname,  'js'),
    filename: '[name].js',
    chunkFilename: "[name].chunk.js",
    publicPath: 'js/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: [node_modules_dir], loader: "babel?presets[]=es2015" },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.html$/, loader: "html" },
      { test: /\.(png|jpg|jpeg)$/, loader: "url?limit=25000" },
    ]
  },
  plugins: [ 
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: {
    //     except: ['$', 'exports', 'require']
    //   }
    // })
  ]
}

