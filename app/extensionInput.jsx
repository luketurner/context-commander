var React = require('react');

module.exports = React.createClass({
    propTypes: {
        extensions: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
        onChange: React.PropTypes.func.isRequired
    },
    onChange: function (e) {
        this.props.onChange(e.target.value.split(','));
    },
    render: function () {
        return <div className="extensionEntry row">
            <label for="extensionEntry" className="one-third column">File extensions:</label>
            <input className="two-thirds column" value={this.props.extensions.join(',')} id="extensionEntry" type="text" onChange={this.onChange} />
        </div>
    }
});
