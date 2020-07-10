$(function () {
    $('.botao').bind('click', function () {
        $('.div').animate(
            {
                /*'margin-left':'150px',*/
                /*'margin-top':'5px',*/
                'border-radius':'50px',
                'background-color': 'green'
            },1000);
    });
});