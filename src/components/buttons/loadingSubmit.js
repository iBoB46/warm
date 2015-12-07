var React = require('react');

var LoadingSubmit = React.createClass({
    propTypes: {
        isLoading: React.PropTypes.bool,
        onClick : React.PropTypes.func,
        text : React.PropTypes.string,
        customClasses : React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            isLoading : false,
            onClickMethod: function(){},
            text : "",
            customClasses : ""
        };
    },
    handleClick: function() {
        this.props.onClick();
    },
    render: function() {
        return (
            <div className={"w-button w-loadingSubmit "+(this.props.isLoading ? "loading " : "")+this.props.customClasses} onClick={this.handleClick}>
                <span className={(this.props.isLoading ? "w-composant-loader medium" : "")}></span>
                <span className="w-button-loadingSubmit-title">{(this.props.isLoading ? "" : this.props.text)}</span>
            </div>
        );
    }
});

module.exports = LoadingSubmit;
