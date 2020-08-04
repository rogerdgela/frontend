$(function () {
    $('button').bind('click', function () {
        var cidade = $('#cidade').val();
        var now = new Date();
        var url = 'https://query.yahooapis.com/v1/public/yql?format=json&rnd=' + now.getFullYear() + now.getMonth() + now.getDate() + now.getHours() + '&diagnostics=true&callback=?&q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + cidade + '") and u="c"';

        $.ajax({
            url: encodeURI(url),
            dataType: 'json',
            type: 'GET',
            beforeSend: function () {
                $('#resultado').html("Carregando");
            },
            success: function (data) {
                if(data !== null && data.query() !== null && data.query.results !== null && data.query.results.channel.descruiption !== 'Yahoo! Weather Error'){
                    var temp = data.query.results.channel.item.condition.temp;
                    $('#resultado').html(temp + "º C");
                }
            },
            error: function () {
                $('#resultado').html("Erro");
            }
        });
    });
});
