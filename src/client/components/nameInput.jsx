var React = require('react');
var InfoTip = require('./infoTip.jsx');

module.exports = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired
    },
    onChange: function (e) {
        this.props.onChange(e.target.value);
    },
    isInvalid: function () {
        return /\W/.test(this.props.name);
    },
    render: function () {
        var infoTip = <InfoTip>
            <p>The name is used for generating the registry keys. It is not seen by users, but it must be unique. For example:</p>
            <ul className="monospace">
                <li>RunDirectoryWithPython</li>
                <li>OpenFileInVim</li>
                <li>NewGitRepoHere</li>
            </ul>
        </InfoTip>;
        return <div className="nameEntry row">
            <label htmlFor="nameEntry" className="one-third column">Name {infoTip}:</label>
            <input className={"two-thirds column" + (this.isInvalid() ? " invalid" : "")} value={this.props.name} id="extensionEntry" type="text" onChange={this.onChange} />
        </div>;
    }
});
