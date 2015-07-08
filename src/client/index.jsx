// Include index.html in distribution
require('file?name=[name].[ext]!./index.html');

// Include styles
require('../../bower_components/skeleton/css/normalize.css');
require('../../bower_components/skeleton/css/skeleton.css');
require('./app.scss');

// Include 3rd party libs
var React = require('react');

// Include base application component
var App = require('./components/app.jsx');

React.render(
    <App />,
    document.getElementById("app")
);