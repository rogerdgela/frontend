$(function () {
    $('.botao').bind('click', function () {
        $('.div').slideToggle('slow');
        //$(this).slideDown('slow');
        //$(this).slideUp('fast');
    });

    $('.topofixo').bind('click', function () {
        $(this).slideUp('fast');
    });
});