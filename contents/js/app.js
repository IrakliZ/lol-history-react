$( "#match_history" ).on( "click", function( event ) {
    React.render(
        <HistoryList url='https://ancient-refuge-8495.herokuapp.com/match_history/ironFrogg'/>,
        document.getElementById('content')
    )
})

$( "#summoners" ).on( "click", function( event ) {
    $("#list").empty()
})

