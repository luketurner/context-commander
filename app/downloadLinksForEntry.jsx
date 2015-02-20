var React = require('react');
var querystring = require('querystring');

var base_url = "/reg/";

module.exports = React.createClass({
    propTypes: {
        entry: React.PropTypes.shape({
            name: React.PropTypes.string,
            text: React.PropTypes.string,
            command: React.PropTypes.string,
            extensions: React.PropTypes.arrayOf(React.PropTypes.string)
        }).isRequired
    },
    urlFor: function (type) {
        var filename = this.props.entry.name + "-" + type + ".reg";
        return base_url + filename + "?" + querystring.stringify(this.props.entry) + "&for=" + type;
    },
    render: function () {
        return <div className="downloadLinks row">
            <a className="button" href={this.urlFor("install")}>install</a>
            <a className="button" href={this.urlFor("uninstall")}>uninstall</a>
        </div>;
    }
});