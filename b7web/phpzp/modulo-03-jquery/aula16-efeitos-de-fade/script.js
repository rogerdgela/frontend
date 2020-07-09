$(function () {
    $('.div').fadeOut('fast', 0);

    $('.botao').bind('click', function () {
        $('.div').fadeToggle('slow');
        //$('.div').fadeOut('fast');
        //$('.div').fadeIn('slow');
        //$('.div').fadeTo('slow', 0.5);
    });
});