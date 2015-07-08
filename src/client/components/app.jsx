var React = require('react');

var ExtensionInput        = require('./extensionInput.jsx');
var CommandInput          = require('./commandInput.jsx');
var MenuTextInput         = require('./menuTextInput.jsx');
var NameInput             = require('./nameInput.jsx');
var DownloadLinksForEntry = require('./downloadLinksForEntry.jsx');
var FragmentHandler       = require('./fragmentHandler.js');


module.exports = React.createClass({
    getInitialState: function() {
        return {
            name: "name",
            text: "text",
            command: "cmd",
            extensions: [".ext", "*"]
        };
    },
    componentDidMount: function () {
        var entry = FragmentHandler.getEntryFromFragment();
        if (entry != null) {
            this.setState(entry);
        }
    },
    nameChanged: function (name) {
        this.setState({
            name: name
        });
    },
    textChanged: function (text) {
        this.setState({
            text: text
        });
    },
    commandChanged: function (command) {
        this.setState({
            command: command
        });
    },
    extensionsChanged: function (extensions) {
        this.setState({
            extensions: extensions
        });
    },
    render: function() {
        return <div>
            <FragmentHandler entry={this.state} />
            <h5>1. Configure:</h5>
            <NameInput name={this.state.name} onChange={this.nameChanged} />
            <MenuTextInput text={this.state.text} onChange={this.textChanged} />
            <CommandInput command={this.state.command} onChange={this.commandChanged} />
            <ExtensionInput extensions={this.state.extensions} onChange={this.extensionsChanged} />
            <h5>2. Download:</h5>
            <DownloadLinksForEntry entry={this.state} />
            <h5>3. Share or Save:</h5>
            <p>
            You can bookmark or share this page.
            Your menu entry configuration will still be here when you come back.
            </p>
        </div>;
    }
});
