var React = require('react');

module.exports = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired
    },
    onChange: function (e) {
        this.props.onChange(e.target.value);
    },
    render: function () {
        return <div className="nameEntry row">
            <label for="nameEntry" className="one-third column">Name:</label>
            <input className="two-thirds column" value={this.props.name} id="extensionEntry" type="text" onChange={this.onChange} />
        </div>
    }
});
