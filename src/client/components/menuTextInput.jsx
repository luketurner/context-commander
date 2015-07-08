var React = require('react');
var InfoTip = require('./infoTip.jsx');

module.exports = React.createClass({
    propTypes: {
        text: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired
    },
    onChange: function (e) {
        this.props.onChange(e.target.value);
    },
    render: function () {
        var infoTip = <InfoTip>
            <p>This is the text displayed in the context menu for your command. For example:</p>
            <ul className="monospace">
                <li>Open with vim</li>
                <li>Secure delete</li>
                <li>Create Git repository here</li>
            </ul>
        </InfoTip>;
        return <div className="menuTextEntry row">
            <label htmlFor="menuTextEntry" className="one-third column">Menu text {infoTip}:</label>
            <input className="two-thirds column" value={this.props.text} id="menuTextEntry" type="text" onChange={this.onChange} />
        </div>;
    }
});