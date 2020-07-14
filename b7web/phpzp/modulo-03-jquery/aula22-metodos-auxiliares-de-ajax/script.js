$(function () {
    $('button').bind('click', function () {
        //$('.div').load('teste.html');

        /*$.get('teste.html', function (dados) {
            $('.div').html(dados);
        })*/

        $.post('teste.html', function (dados) {
            $('.div').html(dados);
        })
    });
});