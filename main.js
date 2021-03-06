var queryObj = {
    'api-key' : "db88f4c617ed41e1a9b08bcb955573e4",
    'q' : '',
    'page' : 0,
    // 'begin_date': '20180101',
    // 'end_date' : '20180228',
}

const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        

$(document).ready(function(){
    
    $('#searchBtn').on('click', function(r){
        queryObj.q = $('#term').val();
        
        queryObj.page = parseInt($('#pages').val());
        //push dates if options set by user
        if($('#startYear').val() !== '')
            queryObj['begin_date'] = $('#startYear').val(); 
        if($('#endYear').val() !== '')
            queryObj['end_date'] = $('#endYear').val();
        
            console.log(queryObj);
        
        var qURL = url + '?' + $.param(queryObj);

        console.log(qURL);
        getArticles(qURL);

    });

    $('body').on('click', '#next', function(){
        $('#articles'
    ).empty();
        console.log(qURL);
        queryObj.page++;
        var qURL = url +  '?' + $.param(queryObj);
        console.log(qURL);
        getArticles(qURL);
    });
    
    function getArticles(qURL){
        $.ajax({
            url: qURL,
            method: 'GET',
        }).done(function(result) {
            console.log(result);

            var articles = result.response.docs;

            articles.forEach(e => {
                var htmlDisplay = $('<div>');
                htmlDisplay.append('<h4>').html(e.headline.main, '<br>');
                $('#articles').append(htmlDisplay);
            });
            var nxtPage = $('<div id="next">').html("Next 10 Articles");
            $('#articles').append(nxtPage);
            
        }).fail(function(err) {
            throw err;
        });
    }

});