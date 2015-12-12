var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var spritesmith = require('gulp.spritesmith');

var path = require("path");
var node_modules_dir = path.resolve(__dirname, 'node_modules');
wp_config = {
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

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(wp_config, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task("wds", function(callback) {
    // Start a webpack-dev-server
    var compiler = webpack(wp_config);

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('images/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));
  return spriteData.pipe(gulp.dest('img'));
});