$(function () {

    $('#idade').bind('change', function () {
        console.log($(this).val());
    });

    $('#nome, #email').bind('focus', function () {
        $(this).addClass('focado');
    });

    $('#nome, #email').bind('blur', function () {
        $(this).removeClass('focado');
    });

    /*$('#form').bind('submit', function (event) {
        event.preventDefault();
        console.log('O formumlário foi enviado');
    });*/

    /*$('#nome').bind('select', function () {
        console.log('O campo nome foi selecionado');
    });*/
});