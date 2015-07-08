/*
    Inspired by (and some code cribbed from) the InfoTip component from Khan Academy's react-components library.
    See the original source here: https://github.com/Khan/react-components/blob/master/js/info-tip.jsx
 */
var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return { visible: false };
    },
    toggleVisible: function () {
        this.setState({ visible: !this.state.visible });
        return false;
    },
    render: function () {
        var popupStyle = {display: this.state.visible ? "block": "none"};
        return <div className="infoTip">
            <span className="text" onClick={this.toggleVisible}>[{"?"}]</span>
            <div className="popup" style={popupStyle}>
                <div className="triangle" />
                <div className="content"> {this.props.children} </div>
            </div>
        </div>
    }
});
