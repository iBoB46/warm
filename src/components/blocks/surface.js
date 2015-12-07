var React = global.React || require('react');

var Surface = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        titleLoading: React.PropTypes.bool,
        contentLoading: React.PropTypes.bool,
        details: React.PropTypes.object,
        content: React.PropTypes.object,
        customClasses: React.PropTypes.string
    },
    getDefaultProps: function() {
        return {
            title: "",
            titleLoading: false,
            contentLoading: false,
            details: {},
            content: {},
            customClasses: ""
        }
    },
    render: function() {
        var Title = "";
        var Content = "";
        if(this.props.title){
            if (this.props.titleLoading == true) {
                Title = (
                    <div className="w-surface-title">
                        <div className="w-composant-loader small"></div>
                    </div>
                );
            } else {
                Title = (
                    <div className="w-surface-title">
                        <h1>
                            {this.props.title}
                        </h1>
                        <div className="details">
                            {this.props.details}
                        </div>
                    </div>
                );
            }
        }

        if (this.props.contentLoading == true) {
            Content = (
                <div className="w-surface-content">
                    <div className="w-composant-loader medium">Loading...</div>
                </div>
            );
        } else {
            Content = (
                <div className="w-surface-content">
                    {this.props.content}
                </div>
            );
        }
        return (
            <div className={"w-block w-surface "+this.props.customClasses}>
                {Title}
                {Content}
            </div>
        );
    }
});

module.exports = Surface;
