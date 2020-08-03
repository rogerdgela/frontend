$(function(){
    $('#senha').bind('keyup',function () {
        var txt = $(this).val();
        var forca = 0;

        //minimo de 6 caracteres
        if(txt.length >= 6){
            forca += 25;
        }

        //letras
        var letras = new RegExp(/[a-z]/i);
        if(letras.test(txt)){
            forca += 25;
        }

        //numeros;
        var numeros = new RegExp(/[0-9]/i);
        if(numeros.test(txt)){
            forca += 25;
        }

        //caracteres especias
        var especiais = new RegExp(/[^a-z0-9]/i);
        if(especiais.test(txt)){
            forca += 25;
        }

        if(forca >= 75){
            var aceita = 'Aceita';
        }else{
            var aceita = 'Não aceita';
        }


        $('#forca').html('Força: ' + forca + ' (' + txt + ') - ' + aceita);
    });
});
