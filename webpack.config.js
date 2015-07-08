// adapted from http://github.com/luketurner/starter-kit/blob/master/webpack.config.js

var webpack = require("webpack");
var path = require("path");

module.exports = {
    cache: true,
    entry: "./src/client/app.jsx",
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "app.js"
    },
    module: {
        loaders: [
            // CSS/SASS
            { test: /\.css$/,     loader: "style!css!autoprefixer" },
            { test: /\.s[ac]ss$/, loader: "style!css!autoprefixer!sass" },

            // JSX
            { test: /\.jsx$/, loader: "jsx" },

            // Images, fonts, etc.
            { test: /\.(png|jpe?g|gif)$/,    loader: "url?limit=1000" },
            { test: /\.(ttf|eof|svg|woff)$/, loader: "file" }
        ]
    },
    plugins: []
};
