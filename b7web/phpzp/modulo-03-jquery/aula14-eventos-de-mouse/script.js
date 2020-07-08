$(function () {
    $('.botao').bind('dblclick', function () {
        console.log('Clicou duas vezes');
    });

    $('.botao').bind('click', function () {
        console.log('Clicou');
    });

    /*$('.botao').bind('mouseover', function () {
        $(this).addClass('botao_emcima');
    });
    $('.botao').bind('mouseout', function () {
        $(this).removeClass('botao_emcima');
    });*/

    /*$('.botao').bind('mousemove', function () {
        console.log('moveu o mouse');
    });*/

    /*$('.botao').bind('mousedown', function () {
        console.log('Apertou o mouse');
    });

    $('.botao').bind('mouseup', function () {
        console.log('Soltou o mouse');
    });*/
});