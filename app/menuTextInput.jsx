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
        return <div className="menuTextEntry row">
            <label for="menuTextEntry" className="one-third column">Menu text:</label>
            <input className="two-thirds column" value={this.props.text} id="menuTextEntry" type="text" onChange={this.onChange} />
        </div>
    }
});