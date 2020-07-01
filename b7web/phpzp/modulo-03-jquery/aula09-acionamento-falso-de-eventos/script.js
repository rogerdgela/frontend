$(function () {

    $('#btn01').bind('click', function () {
        $('#btn02').trigger('mouseover');
    });

    $('#btn02').bind('mouseover', function () {
        alert('Clicou no botao 2');
    });
});