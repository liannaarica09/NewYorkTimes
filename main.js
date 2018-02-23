var queryObj = {
    'api-key' : "db88f4c617ed41e1a9b08bcb955573e4",
    'q' : '',
    'page' : 0,
    // 'begin_date': '20180101',
    // 'end_date' : '20180228',
}

$(document).ready(function(){
    var url = '';

    $('#searchBtn').on('click', function(r){
        queryObj.q = $('#term').val();
        
        queryObj.page = parseInt($('#pages').val());
        if($('#startYear').val() !== '')
            queryObj['begin_date'] = $('#startYear').val(); 
        if($('#endYear').val() !== '')
            queryObj['end_date'] = $('#endYear').val();
        
            console.log(queryObj);
        
        url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param(queryObj);

        console.log(url);
        getArticles();
    });
    
    function getArticles(){
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            console.log(result);

            var articles = result.response.docs;

            articles.forEach(e => {
                var htmlDisplay = $('<div>');
                htmlDisplay.append('<h4>').html(e.headline.main, '<br>');
                $('#articles').append(htmlDisplay);
            });

        }).fail(function(err) {
            throw err;
        });
    }

});