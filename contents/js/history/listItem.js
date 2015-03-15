var MatchHistoryListItem = React.createClass({

    render: function() {

        var match_history = this.props.match_history
        var d = new Date(0)
        d.setUTCSeconds(match_history.matchCreation)

        return (
            <div className="match_history" >
                <table className="u-full-width">
                    <thead>
                        <tr>
                            <th> Champion </th>
                            <th> Date </th>
                            <th> Duration </th>
                            <th> Kills </th>
                            <th> Assists </th>
                            <th> Deaths </th>
                            <th> Champion Level </th>
                            <th> Damage Dealth </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> {match_history.participants[0].championId} </td>
                            <td> {d.toDateString()} </td>
                            <td> {parseInt(match_history.matchDuration/60) + ":" + match_history.matchDuration % 60} </td>
                            <td> {match_history.participants[0].stats.kills} </td>
                            <td> {match_history.participants[0].stats.assists} </td>
                            <td> {match_history.participants[0].stats.deaths} </td>
                            <td> {match_history.participants[0].stats.champLevel} </td>
                            <td> {match_history.participants[0].stats.totalDamageDealtToChampions} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
  }
})
