$(function () {
    $('a.galeria').bind('click',function (){
        var img = $(this).find('img').attr('src');

        $('.boximage img').attr('src', img);
        $('.bgbox, .boximage').fadeIn('fast');
    });

    $('.bgbox, .boximage button').bind('click',function (){
        $('.bgbox, .boximage').fadeOut('fast');
    });
});
