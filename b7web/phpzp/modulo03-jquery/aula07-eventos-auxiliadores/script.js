$(function () {
    $('button').hover(function () {
        $(this).toggleClass('fundoazul'); // se existir dois toggleClass
    });

    /*$('button').hover(function () {
        $(this).addClass('fundoazul');
    }, function () {
        $(this).removeClass('fundoazul');
    });*/
});