$(function () {
    $('#btn01').bind('click', function () {
        $('.div').animate({
            'margin-left':'+=50px'
        },2000);
    });

    $('#btn02').bind('click', function () {
        $('.div').animate({
            'margin-left':'-=50px'
        },2000);
    });
});