$(function(){
    var horaescolhaCampo;

    $('input').bind('focus', function () {
        var pos = $(this).offset();
        var width = $(this).width();

        $('.horaescolha').css('left', pos.left + width + 6);
        $('.horaescolha').css('top', pos.top);
        $('.horaescolha').slideDown();

        horaescolhaCampo = $(this);
    });

    $('input').bind('blur', function () {
        setTimeout(function () {
            $('.horaescolha').slideUp();
        }, 100)
    });

    $('.horaescolha button').bind('click', function () {
        var hora = $(this).html();
        horaescolhaCampo.val(hora);
    });
});