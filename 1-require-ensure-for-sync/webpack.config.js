var path = require("path");
module.exports = {
  entry: {
    first: ['./first.js'],
    // second: ['./second.js']
  },
  output: {
    path: path.join(__dirname,  'js'),
    filename: '[name].js',
    chunkFilename: "[name].chunk.js",
    publicPath: 'js/'
  },
}

