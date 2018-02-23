var queryObj = {
    'api-key' : "db88f4c617ed41e1a9b08bcb955573e4",
    'q' : '',
    'page' : 0,
    'begin_date': '20180101',
    'end_date' : '20180228',
}

$(document).ready(function(){
    // Built by LucyBot. www.lucybot.com
    // Built by LucyBot. www.lucybot.com
    var url = "https://api.nytimes.com/svc/archive/v1/2016/1.json";
    url += '?' + $.param(queryObj);

    console.log(url);


    $.ajax({
        url: url,
        method: 'GET',
    }).done(function(result) {
        console.log(result);
    }).fail(function(err) {
        throw err;
    });

});