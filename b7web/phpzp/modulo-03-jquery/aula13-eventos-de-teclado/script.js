$(function () {
    $('#nome').bind('keyup', function (evento) {
        if(evento.keyCode == 13){
            var txt = $(this).val();

            console.log(txt);

            $(this).val('');
        }
        /*evento.preventDefault();
        console.log(evento.keyCode);*/
    });
    /*$('#nome').bind('keydown', function () {
        console.log('Apertou');
    });

    $('#nome').bind('keyup', function () {
        console.log('Soltou');
    });*/
});