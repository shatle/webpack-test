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
  plugins: [ new webpack.optimize.CommonsChunkPlugin('common.js')]
}

