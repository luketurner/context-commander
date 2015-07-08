// adapted from http://github.com/luketurner/starter-kit/blob/master/gulpfile.js

var gulp = require("gulp");
var gutil = require("gulp-util");
var nodemon = require("gulp-nodemon");
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

gulp.task("default", ["build"]);

gulp.task("dev-server", function () {
    nodemon({
        ext: "js jsx html css scss sass",
        env: { NODE_ENV: "development" },
        execMap: {
            js: "node --harmony"
        },
        tasks: ["build-dev"],
        watch: "src"
    });
});

// Production build
gulp.task("build", function(callback) {
    // modify some webpack config options
    var myConfig = Object.create(webpackConfig);
    myConfig.plugins = myConfig.plugins.concat(
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                NODE_ENV: "production"
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );

    // run webpack
    webpack(myConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});

// modify some webpack config options
var myDevConfig = Object.create(webpackConfig);
myDevConfig.devtool = "sourcemap";
myDevConfig.debug = true;

// create a single instance of the compiler to allow caching
var devCompiler = webpack(myDevConfig);

gulp.task("build-dev", function(callback) {
    // run webpack
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-dev", err);
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));
        callback();
    });
});