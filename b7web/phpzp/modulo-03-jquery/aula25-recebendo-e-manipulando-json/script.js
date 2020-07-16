$(function () {
    $('#form').bind('submit',function (e) {
        e.preventDefault();

        var txt = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'ajax.php',
            data: txt,
            dataType: 'json',
            success: function (retorno) {
               if(retorno.status == 'ok'){
                   alert('Logou');
               }else{
                   alert('Errado');
               }
            },
            error: function () {
                alert('Erro');
            }
        });

        /*$.ajax({
            type: 'POST',
            url: 'ajax.php',
            data: txt,
            dataType: 'json',
            success: function (retorno) {
               alert("Meu nome é " + retorno.usuario + " e tem " + retorno.qt_nome + " caracteres");
            },
            error: function () {
                alert('Erro');
            }
        });*/
    });
});