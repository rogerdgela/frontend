$(function () {
    $('#btn01').bind('click', function () {
        $('.div').animate({
            'margin-left':'500px'
        },3000);
    });

    $('#btn02').bind('click', function () {
        $('.div').stop();
        //$('.div').pause();
    });
});