var React = require('react');

module.exports = React.createClass({
    propTypes: {
        entry: React.PropTypes.shape({
            name: React.PropTypes.string,
            text: React.PropTypes.string,
            command: React.PropTypes.string,
            extensions: React.PropTypes.arrayOf(React.PropTypes.string)
        }).isRequired
    },
    componentWillReceiveProps: function (newProps) {
        location.hash = JSON.stringify(newProps.entry);
    },
    render: function () {
        return null;
    },
    statics: {
        getEntryFromFragment: function () {
            if (location.hash.length > 1) {
                var entry = JSON.parse(location.hash.substring(1));
                return entry;
            }
            return null;
        }
    }
});