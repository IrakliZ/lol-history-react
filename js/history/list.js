var HistoryList = React.createClass({displayName: 'HistoryList',

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({
                    data: data.matches
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    render: function() {

        var self = this

        var histories = this.state.data.map(function (match_history) {

          return (
            <MatchHistoryListItem match_history={match_history}/>
            )
        })

        return (
            <div className="doctorPage">
                <div className="doctorList twelve columns">
                    {histories}
                </div>
            </div>
        )
    }
})
