$(function () {
    $('.div').hide();
    $('.botao').bind('click', function () {
        $('.div').toggle('slow');
        //$('.div').hide('fast');
        /*$('.div').show('slow');*/
    });
});