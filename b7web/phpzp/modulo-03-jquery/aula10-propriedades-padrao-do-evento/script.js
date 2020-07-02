function qualEvento(evento)
{
    evento.preventDefault();
    console.log(evento.target); // ou this
    /*alert(evento.type);*/
}

$(function () {
    $("#btn01").bind('click',qualEvento);
    $("#btn01").bind('mouseover',qualEvento);

    /*$("#btn01").bind('click',function (evento) {
        evento.preventDefault();

        var txt = $('#nome').val();

        alert(txt);
    });*/
});