$(function () {
    // bind faz executar o evento e unbind (off) remove a execução do evento
    $('button').bind('click', function () {
        alert('Clicou');
    });

    $('button').bind('mouseover',function () {
        $(this).addClass('fundoazul');
    });

    $('button').bind('mouseout', function () {
        $(this).removeClass('fundoazul');
    });
});