var React = require('react');
var InfoTip = require('./infoTip.jsx');

module.exports = React.createClass({
    propTypes: {
        menuText: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired
    },
    onChange: function (e) {
        this.props.onChange(e.target.value);
    },
    render: function () {
        var infoTip = <InfoTip>
            <p>The command that is run when the context entry is clicked. Use %1 to reference the selected file or directory. For example:</p>
            <ul className="monospace">
                <li>cmd /K %1</li>
                <li>python -m http.server</li>
                <li>git init %1</li>
            </ul>
        </InfoTip>;
        return <div className="commandEntry row">
            <label for="commandEntry" className="one-third column">Command {infoTip}:</label>
            <input className="two-thirds column" value={this.props.command} id="commandEntry" type="text" onChange={this.onChange} />
        </div>;
    }
});