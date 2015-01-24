var React = require('react');

module.exports = React.createClass({
    propTypes: {
        menuText: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired
    },
    onChange: function (e) {
        this.props.onChange(e.target.value);
    },
    render: function () {
        return <div className="commandEntry row">
            <label for="commandEntry" className="one-third column">Command:</label>
            <input className="two-thirds column" value={this.props.command} id="commandEntry" type="text" onChange={this.onChange} />
        </div>
    }
});