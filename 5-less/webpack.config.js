var path = require("path");
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
      { test: /\.less$/, loader: "style!css!less" }
    ]
  },
  plugins: [ 
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    // new webpack.optimize.UglifyJsPlugin({
    //   mangle: {
    //     except: ['$', 'exports', 'require']
    //   }
    // })
  ]
}

