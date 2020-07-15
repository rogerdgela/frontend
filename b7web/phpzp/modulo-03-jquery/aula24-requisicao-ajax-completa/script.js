$(function () {
    $('#form').bind('submit',function (e) {
        e.preventDefault();

        var txt = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: 'ajax.php',
            data: txt,
            success: function (retorno) {
                $('.div').html('Resultado: ' + retorno);
            },
            error: function () {
                alert('Erro');
            }
        });
    });
});