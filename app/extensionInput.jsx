var React = require('react');
var InfoTip = require('./infoTip.jsx');

module.exports = React.createClass({
    propTypes: {
        extensions: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
        onChange: React.PropTypes.func.isRequired
    },
    onChange: function (e) {
        this.props.onChange(e.target.value.split(' '));
    },
    render: function () {
        var infoTip = <InfoTip>
            <p>
                This is a space-separated list of file extensions that your context menu entry will appear for.
                You can either use file extensions like .txt or .py, or use the wildcard * to match all files.
            </p>
            <p>
                You can also use the special string "Directory" to match directories, and the special string "Background"
                to make the entry appear when right-clicking in the window background (%1 is the current directory in this case).
            </p>
            <ul className="monospace">
                <li>.doc .docx .xls .xslx</li>
                <li>Directory .py</li>
                <li>* Background</li>
            </ul>
        </InfoTip>;
        return <div className="extensionEntry row">
            <label for="extensionEntry" className="one-third column">File exts {infoTip}:</label>
            <input className="two-thirds column" value={this.props.extensions.join(' ')} id="extensionEntry" type="text" onChange={this.onChange} />
        </div>;
    }
});
